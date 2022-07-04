// EXAMPLE
import { body } from 'express-validator'

import customValidators from '../libs/customValidator'
import validateMsg from '../constants/validateMessages'

const createReservedSeatRequest = [
  body('Showtime_id')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Number')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Type')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
]

export default createReservedSeatRequest
