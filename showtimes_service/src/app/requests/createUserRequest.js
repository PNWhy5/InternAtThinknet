// EXAMPLE
import { body } from 'express-validator'

import customValidators from '../libs/customValidator'
import validateMsg from '../constants/validateMessages'

const createShowtimeRequest = [
  body('Movie_id')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Theater_id')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Time')
    .notEmpty()
    .withMessage(validateMsg.notEmpty)
    .isString()
    .bail(),
  body('Date')
    .notEmpty()
    .withMessage(validateMsg.notEmpty)
    .isString()
    .bail(),
]

export default createShowtimeRequest
