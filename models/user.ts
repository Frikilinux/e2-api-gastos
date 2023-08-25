import { Schema, model } from 'mongoose'

interface IUser {
  userName: string
  dni: number
  name: string
  mail: string
}

const UserSchema = new Schema<IUser>({
  userName: {
    type: String,
    unique: true,
  },
  dni: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
})

const User = model<IUser>('User', UserSchema)

export {IUser, User}
