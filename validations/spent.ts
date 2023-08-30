// user: ObjectId
// category: string
// price: number
// product: string
// description: string
// state: boolean
import { check } from 'express-validator'
import { collectErrors } from '../middlewares/collectErrors'
import { findUser } from '../helpers/checkUniqueData'

const spentValidations = [
  check('user', 'The username is required').not().isEmpty(),
  check('user').custom(findUser),
  check('category', 'The category is required').not().isEmpty(),
  check('price', 'The price is required').isNumeric().withMessage('Must be a number').not().isEmpty(),
  check('product', 'The product is required').not().isEmpty(),
  check('description', 'The description is required').not().isEmpty(),
  collectErrors,
]

export { spentValidations }
