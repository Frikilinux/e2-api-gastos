import { Request, Response } from 'express'
import { ISpent, Spent } from '../models/spent'
import { User } from '../models/user'
import validateSpent from '../schemas/spent'

const getSpents = async (req: Request, res: Response) => {
  const state = { state: true }

  const spents = await Spent.find(state).populate('user')
  res.json({ spents })
}

const getSpentsByUser = async (req: Request, res: Response) => {
  const { user } = req.params

  const userData = await User.findOne({ userName: user })

  if (!userData) {
    return res.status(404).json({ msg: 'User not found' })
  }

  const spents = await Spent.find({ user: userData?._id })

  spents.length
    ? res.status(200).json(spents)
    : res
        .status(200)
        .json({ msg: `Not spents registered for user ${userData?._id}` })
}

const createSpent = async (req: Request, res: Response) => {
  const spentData: ISpent = req.body
  const { user } = spentData

  const userData = await User.findOne({ userName: user })

  const spent = new Spent({
    ...spentData,
    user: userData?._id,
    // state: true,
  })

  await spent.save()

  res.status(201).json({
    msg: 'Spent created succesfully',
    spent,
  })
}

export { createSpent, getSpents, getSpentsByUser }
