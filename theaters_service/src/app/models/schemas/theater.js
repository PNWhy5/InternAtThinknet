// EXAMPLE
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  Name: {type : String, required: true, unique: true},
}, {
  collection: 'theaters',
  versionKey: false,
  timestamps: true,
})

export default userSchema
