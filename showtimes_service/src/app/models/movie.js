// EXAMPLE
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose'

import showtimeSchema from './schemas/movie'

const model = mongoose.model('showtimes', showtimeSchema)

export default model
