// EXAMPLE
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose'

import theaterSchema from './schemas/reservedseat'

const model = mongoose.model('theater', theaterSchema)

export default model
