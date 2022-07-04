import express from 'express'

import requests from './requests'
import controllers from './controllers'

const router = express.Router()

router
  .get('/alltheaters', controllers.user.getAll)
  .get('/theaters/:_id', controllers.user.getByID)
  .get('/theaters', controllers.user.getByName)
  .put('/theaters/:_id', controllers.user.updateByID)
  .post('/theaters', requests.createTheaterRequest,controllers.user.create)
  .delete('/theaters/:_id', controllers.user.deleteByID)
  .delete('/theaters', controllers.user.deleteByName)

export default router
