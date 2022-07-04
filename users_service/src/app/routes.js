import express from 'express'

import requests from './requests'
import controllers from './controllers'

const router = express.Router()

router
  .get('/allusers', controllers.user.getAll)
  .get('/users/:Username', controllers.user.getByUsername)
  .get('/users', controllers.user.getByUsernamePassword)
  .put('/users/:Username', controllers.user.updatePasswordByUsername)
  .post('/users', requests.createUserRequest,controllers.user.create)
  .delete('/users/:Username', controllers.user.deleteByUsername)

export default router
