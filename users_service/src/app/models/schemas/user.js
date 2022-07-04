// EXAMPLE
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  Username: {type : String, required: true, unique: true},
  Password: {type : String, required: true},
}, {
  collection: 'users',
  versionKey: false,
  timestamps: true,
})

export default userSchema
