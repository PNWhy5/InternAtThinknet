import { param, body } from 'express-validator'

const validateFieldsList = [
  param('ID')
    .notEmpty()
    .withMessage('ID is not empty'),
  body('name')
    .isString()
    .notEmpty()
    .withMessage('name is not empty'),
  body('amount')
    .notEmpty()
    .withMessage('amount is not empty'),
  body('price')
    .notEmpty()
    .withMessage('price is not empty'),
]

export default validateFieldsList
