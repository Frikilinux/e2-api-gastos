import { Request, Response } from 'express'
import { IUser, User } from '../models/user'

const getUsers = async (req: Request, res: Response) => {
  const state = { state: true }

  const users = await User.find(state)
  res.json({ users })
}

const getUserByUserName = async (req: Request, res: Response) => {
  const { username } = req.params

  const user = await User.findOne({ userName: username })

  user ? res.json(user) : res.status(404).json({ msg: 'User not found' })
}

// const getUserByDni = async (req: Request, res: Response) => {
//   const { dni } = req.params

//   const user = await User.findOne({dni})

//   user ? res.json(user) : res.status(404).json({ msg: 'User not found' })
// }

const createUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body

  const { dni, name, userName, mail } = userData

  if (!dni || !name || !mail || !userName) {
    res.json({
      msg: 'Error in the request!! :(',
    })
    return
  }

  const user = new User({ ...userData, state: true })

  await user.save()

  res.json({
    msg: 'User created succesfully',
    user,
  })
}

export { getUsers, getUserByUserName, createUser }
