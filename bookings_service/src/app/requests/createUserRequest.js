// EXAMPLE
import { body } from 'express-validator'

import customValidators from '../libs/customValidator'
import validateMsg from '../constants/validateMessages'

const createMovieRequest = [
  body('Username')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
  body('Reference_code')
    .notEmpty()
    .isString()
    .withMessage(validateMsg.notEmpty)
    .bail(),
]

export default createMovieRequest
