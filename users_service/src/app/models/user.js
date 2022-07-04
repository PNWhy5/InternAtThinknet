// EXAMPLE
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose'

import userSchema from './schemas/user'

const model = mongoose.model('users', userSchema)

export default model
