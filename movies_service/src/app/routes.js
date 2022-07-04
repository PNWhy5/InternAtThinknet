import express from 'express'

import requests from './requests'
import controllers from './controllers'

const router = express.Router()

router
  .get('/allmovies', controllers.user.getAll)
  .get('/movies/:_id', controllers.user.getByID)
  .get('/movies', controllers.user.getByName)
  .put('/movies/:_id', controllers.user.updateByID)
  .post('/movies', requests.createMovieRequest,controllers.user.create)
  .delete('/movies/:_id', controllers.user.deleteByID)
  .delete('/movies', controllers.user.deleteByName)

export default router
