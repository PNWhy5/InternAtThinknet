import express from 'express'
import studentsController from './controllers/students'
import validator from './request'

const router = express.Router()

router
    .post('/students',validator.create,studentsController.createStudent )
    .get('/students/:ID',validator.findByID,studentsController.readStudentByID)
    .get('/students',studentsController.readStudent)
    .get('/students/:ID/gpax',validator.gpax,studentsController.GPAXByID)
    .put('/students/:ID',studentsController.updateStudentByID)
    .delete('/students/:ID',validator.Delete,studentsController.deleteStudentByID)

export default router