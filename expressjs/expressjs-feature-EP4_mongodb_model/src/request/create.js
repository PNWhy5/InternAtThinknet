import { body } from 'express-validator'
import validate from '../resources/validateMessages'

const validateFieldsList = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage(validate.notEmpty),
  body('amount')
    .notEmpty()
    .withMessage(validate.notEmpty),
  body('price')
    .notEmpty()
    .withMessage(validate.notEmpty),
]

export default validateFieldsList
