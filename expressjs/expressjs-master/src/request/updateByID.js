import { param, body } from 'express-validator'
import validate from '../resources/validateMessages'
import customValidators from '../libs/customValidators'

const validateFieldsList = [
  param('ID').custom(customValidators.isObjectID)
    .withMessage(validate.isObjectID),
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
