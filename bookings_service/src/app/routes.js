import express from 'express'

import requests from './requests'
import controllers from './controllers'

const router = express.Router()

router
  .get('/allbookings', controllers.user.getAll)
  .get('/bookings/:Reference_code', controllers.user.getByCode)
  .get('/bookings', controllers.user.getByUsername)
  .put('/bookings/:Reference_code', controllers.user.updateByReference_code)
  .post('/bookings', requests.createBookingRequest,controllers.user.create)
  .delete('/bookings/:Reference_code', controllers.user.deleteByCode)
  .delete('/bookings', controllers.user.deleteByUsername)

export default router
