import { check } from 'express-validator'
import { collectErrors } from '../middlewares/collectErrors'
import { uniqueMail, uniqueUserName } from '../helpers/checkUniqueData'

const userValidations = [
  check('userName', 'The username is required').not().isEmpty(),
  check('userName').custom(uniqueUserName),
  check('dni', 'The dni is required').isNumeric().not().isEmpty(),
  check('name', 'The name is required').not().isEmpty(),
  check('mail', 'The email is required').isEmail().not().isEmpty(),
  check('mail').custom(uniqueMail),
  collectErrors,
]

export { userValidations }
