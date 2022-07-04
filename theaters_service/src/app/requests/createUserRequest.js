// EXAMPLE
import { body } from 'express-validator'

import customValidators from '../libs/customValidator'
import validateMsg from '../constants/validateMessages'

const createTheaterRequest = [
  body('Name')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
]

export default createTheaterRequest
