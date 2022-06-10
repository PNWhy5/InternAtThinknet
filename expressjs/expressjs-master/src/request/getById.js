import { param } from 'express-validator'
import validate from '../resources/validateMessages'
import customValidators from '../libs/customValidators'

const validateFieldsList = [
  param('ID').custom(customValidators.isObjectID)
    .withMessage(validate.isObjectID),
]

export default validateFieldsList
