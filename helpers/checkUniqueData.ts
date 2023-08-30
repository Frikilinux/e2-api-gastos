import { IUser, User } from '../models/user'

const uniqueMail = async (mail: string): Promise<void> => {
  const userData: IUser | null = await User.findOne({ mail })

  if (userData) {
    throw new Error(`Email exist in DB`)
  }
}

const uniqueUserName = async (userName: string): Promise<void> => {
  const userData: IUser | null = await User.findOne({ userName })

  if (userData) {
    throw new Error(`User name exist in DB`)
  }
}

const findUser = async (user: string): Promise<void> => {
  const userData: IUser | null = await User.findOne({ userName: user })

  console.log('USER FIND', userData);
  

  if (!userData) {
    throw new Error(`User name don't exist.`)
  }
}

export { uniqueMail, uniqueUserName, findUser }
