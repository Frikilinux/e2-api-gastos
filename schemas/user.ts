import z from 'zod'
import { IUser } from '../models/user'
const userSchema = z.object({
  userName: z.string({
    required_error: 'Username Required',
  }),
  dni: z
    .number({
      required_error: 'DNI number required',
    })
    .int()
    .positive(),
  name: z.string({
    required_error: 'Real name is reqired',
  }),
  mail: z
    .string({
      required_error: 'Mail address is requiered',
    })
    .email({
      message: 'Invalid email address',
    }),
  })

const validateUser = (object: IUser) => {
  return userSchema.safeParse(object)
}

export default validateUser
