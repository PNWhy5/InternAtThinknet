import { param } from 'express-validator'
import validate from '../resources/validateMessages'

const validateFieldsList = [
  param('ID')
    .trim()
    .notEmpty()
    .withMessage(validate.notEmpty),
]

export default validateFieldsList
