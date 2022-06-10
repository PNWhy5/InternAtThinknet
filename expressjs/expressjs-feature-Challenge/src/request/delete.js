import { param } from 'express-validator'
import validate from '../resource/validateMessages'

const isNumber = (value) => {
    return !isNaN(value)
}

const validateFieldsList = [
    param('ID')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString()
        .custom(isNumber),

]

export default validateFieldsList