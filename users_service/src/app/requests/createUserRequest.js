// EXAMPLE
import { body } from 'express-validator'

import customValidators from '../libs/customValidator'
import validateMsg from '../constants/validateMessages'

const createUserRequest = [
  body('Username')
    .notEmpty()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Password')
    .notEmpty()
    .withMessage(validateMsg.notEmpty)
    .bail(),
]

export default createUserRequest
