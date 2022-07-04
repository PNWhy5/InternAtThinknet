// EXAMPLE
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose'

import movieSchema from './schemas/movie'

const model = mongoose.model('movie', movieSchema)

export default model
