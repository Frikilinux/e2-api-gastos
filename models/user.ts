import { Model, Schema, model } from 'mongoose'

interface IUser {
  userName: string
  dni: number
  name: string
  mail: string
  state?: boolean
}

const UserSchema = new Schema<IUser>({
  userName: {
    type: String,
    unique: true,
  },
  dni: {
    type: Number,
  },
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
  state: {
    type: Boolean,
    default: true,
  },
})

UserSchema.methods.toJson = function () {
  const { __v, state, ...user } = this.toObject()
  return user
}

const User: Model<IUser> = model<IUser>('User', UserSchema)

export { IUser, User }
