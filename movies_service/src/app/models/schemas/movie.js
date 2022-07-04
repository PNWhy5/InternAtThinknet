// EXAMPLE
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  Name: {type : String, required: true},
  Description: {type : String, required: true},
  Length: {type: Number, required: true},
  Picture: {type: String, required: true},
}, {
  collection: 'movies',
  versionKey: false,
  timestamps: true,
})

export default userSchema
