import { body } from 'express-validator'
import validate from '../resource/validateMessages'

const isNumber = (value) => {
    return !isNaN(value)
}

const validateFieldsList = [
    body('ID')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString()
        .custom(isNumber),
    body('firstname')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString(),
    body('lastname')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString(),
    body('gender')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString()
        .optional(),
    body('class')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString()
        .optional(),
    body('contact.phone.*')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .optional(),
    body('contact.zipcode')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .custom(isNumber)
        .optional(),
    body('gpa.*.grade')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isInt()
        .optional(),
    body('gpa.*.gpa')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isFloat()
        .optional(),
    body('club.*')
        .trim()
        .notEmpty()
        .withMessage(validate.notEmpty)
        .isString()
        .optional(),


]

export default validateFieldsList