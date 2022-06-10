import studentsModel from '../models/students'
import {
    NOT_FOUND_DATA, ERROR_CREATION,
  } from '../constants/errors/unsuccess'
  import {
    SUCCESS_CREATED,
  } from '../constants/success'


const createStudent = async (req,res) => {
    const body = req.body
    try {
        await studentsModel.create(body)
        res.status(201).json(SUCCESS_CREATED)
    } catch (error) {
        throw ERROR_CREATION
    }
}

const readStudent = async (req,res) => {
    const result = await studentsModel.find()
    res.status(200).json(result)
}

const readStudentByID = async (req,res) => {
    const {ID} = req.params 
    const result = await studentsModel.findOne({id: ID})
    if(!result){
        throw NOT_FOUND_DATA
    }
    res.status(200).json(result)
}

const deleteStudentByID = async (req, res) => {
    const { ID } = req.params
    const result = await studentsModel.deleteOne({id: ID })
    res.status(200).json(result)
  }
  
const updateStudentByID = async (req, res) => {
    const { ID } = req.params
    console.log(ID)
    const body = req.body
    const result = await studentsModel.findOneAndUpdate({id: ID},body)
    res.status(200).json(result)
  }

const GPAXByID = async(req,res) => {
    const { ID } = req.params
    try{
        const student = await studentsModel.findOne({id: ID})
        const num = student?.gpa?.length
        let sum = 0
        for(let i = 0;i < num;i++){
            sum = student?.gpa[i].gpa
        }
        const GPAX = sum/num
        res.status(200).json(`Studen ID ${ID} : GPAX : ${GPAX}`)
    } catch(error){
        res.status(400).send('Wrong')
    }
}
  
export default {
    createStudent,
    readStudent,
    readStudentByID,
    deleteStudentByID,
    updateStudentByID,
    GPAXByID,
}