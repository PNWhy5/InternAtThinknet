import express from 'express'

import requests from './requests'
import controllers from './controllers'

const router = express.Router()

router
  .get('/allreservedseats', controllers.user.getAll)
  .get('/reservedseats/:_id', controllers.user.getByID)
  .get('/reservedseats', controllers.user.getByShowtime_id)
  .put('/reservedseats/:_id', controllers.user.updateByid)
  .post('/reservedseats', requests.createReservedSeatRequest,controllers.user.create)
  .delete('/reservedseats/:_id', controllers.user.deleteByID)
  .delete('/reservedseats', controllers.user.deleteByShowtime_id)

export default router
