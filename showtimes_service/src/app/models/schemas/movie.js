// EXAMPLE
import mongoose from 'mongoose'
import user from '../../controllers/user'

const userSchema = new mongoose.Schema({
  Movie_id: {type : String, required: true},
  Theater_id: {type : String, required: true},
  Time: {type : String, required: true, match: [/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/,'Please fill valid time format HH:MM:SS']},
  Date: {type : String,required: true, match: [/^[0-3][0-9]\/([0-9]|(1[0-2]))\/[0-9][0-9][0-9][0-9]$/,'Please fill valid Date format D:M:Y']}
}, {
  collection: 'showtimes',
  versionKey: false,
  timestamps: true,
})

userSchema.index({Movie_id: 1,Theater_id: 1, Time: 1, Date: 1},{unique: true})

export default userSchema
