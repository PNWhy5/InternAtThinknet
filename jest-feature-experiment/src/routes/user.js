import express from 'express'

import userController from '../controllers/user'

const router = express.Router()

router.get('/user', userController.getUser)
router.post('/user', userController.createUser)
router.put('/user', userController.updateUser)
router.delete('/user', userController.removeUser)

export default router
