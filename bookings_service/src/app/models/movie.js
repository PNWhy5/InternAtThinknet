// EXAMPLE
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose'

import bookingSchema from './schemas/movie'

const model = mongoose.model('bookings', bookingSchema)

export default model
