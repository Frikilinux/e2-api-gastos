import { Request, Response } from 'express'
import { IUser, User } from '../models/user'
import validateUser from '../schemas/user'

const getUsers = async (req: Request, res: Response) => {
  const state = { state: true }

  const users = await User.find(state)
  res.json({ users })
}

const getUserByUserName = async (req: Request, res: Response) => {
  const { username } = req.params

  const user = await User.findOne({ userName: username })

  user
    ? res.status(200).json(user)
    : res.status(404).json({ msg: 'User not found' })
}

const createUser = async (req: Request, res: Response) => {
  const result = validateUser(req.body)

  if (!result.success) {
    return res
      .status(400)
      .json({ error: { ...result.error, name: 'ZOTTA Error' } })
  }

  const user = new User<IUser>({ ...result.data, state: true })

  await user.save()

  res.status(201).json({
    msg: 'User created succesfully',
    user,
  })
}

export { getUsers, getUserByUserName, createUser }
