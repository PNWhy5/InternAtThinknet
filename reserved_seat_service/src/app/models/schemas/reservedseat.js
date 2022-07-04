// EXAMPLE
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  Showtime_id: {type : String, required: true},
  Number: {type : String, required: true},
  Type: {type : String, required: true, enum: {
      values: ['Normal','VIP'],
      message: '{VALUE} is not supported'
  }},
}, {
  collection: 'reserved seats',
  versionKey: false,
  timestamps: true,
})

userSchema.index({Showtime_id: 1,Number: 1},{unique: true})

export default userSchema
