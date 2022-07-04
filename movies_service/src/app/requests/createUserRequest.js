// EXAMPLE
import { body } from 'express-validator'

import customValidators from '../libs/customValidator'
import validateMsg from '../constants/validateMessages'

const createMovieRequest = [
  body('Name')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Description')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Length')
    .notEmpty()
    .withMessage(validateMsg.notEmpty)
    .isInt()
    .bail(),
  body('Picture')
    .notEmpty()
    .withMessage(validateMsg.notEmpty)
    .bail(),
]

export default createMovieRequest
