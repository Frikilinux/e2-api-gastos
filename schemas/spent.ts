import z from 'zod'
import { ISpent } from '../models/spent'

const spentSchema = z.object({
  user: z.string({
    required_error: 'Username Required',
  }),
  category: z.string({
    required_error: 'Category is reqired',
  }),
  price: z
    .number({
      required_error: 'Price is required',
    })
    .int()
    .positive(),
  product: z.string({
    required_error: 'Product name is reqired',
  }),
  description: z.string({
    required_error: 'A description is reqired',
  }),
})

const validateSpent = (object: ISpent) => {
  return spentSchema.safeParse(object)
}

export default validateSpent
