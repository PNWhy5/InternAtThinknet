// EXAMPLE
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  Username: {type : String, required: true},
  Reference_code: {type: String, required: true},
}, {
  collection: 'bookings',
  versionKey: false,
  timestamps: true,
})

userSchema.index({Username: 1,Reference_code: 1},{unique: true})

export default userSchema
