import express from 'express'

import requests from './requests'
import controllers from './controllers'

const router = express.Router()

router
  .get('/allshowtimes', controllers.user.getAll)
  .get('/showtimes/:_id', controllers.user.getByID)
  .get('/showtimes/movie_id', controllers.user.getByMovie_id)
  .get('/showtimes/theater_id', controllers.user.getByTheater_id)
  .get('/showtimes/Date', controllers.user.getByDate)
  .get('/showtimes/TimeDate', controllers.user.getByTimeDate)
  .put('/showtimes/:_id', controllers.user.updateByID)
  .post('/showtimes', requests.createShowtimeRequest,controllers.user.create)
  .delete('/showtimes/:_id', controllers.user.deleteByID)

export default router
