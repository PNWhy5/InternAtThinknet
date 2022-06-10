import mongoose, { Schema } from 'mongoose'

const studentSchema = new mongoose.Schema(
    {
        "id":{ type: String},
        "firstname":{ type: String},
        "lastname":{ type: String},
        "gender":{ type: String},
        "birthday":{ type: Date},
        "class":{ type: String},
        "contact":{
           "phone":[{ type: String}],
           "zipcode": { type: String}
        },
        "gpa":[
           {
              "grade":{ type: Number},
              "gpa":{ type: Number}
           },
        ],
        "club":[{ type: String}]
     }
)

const studentsModel = mongoose.model('students',studentSchema)

export default studentsModel
export {studentSchema}