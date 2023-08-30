import { Model, ObjectId, Schema, model } from 'mongoose'

interface ISpent {
  user: ObjectId
  category: string
  price: number
  product: string
  description: string
  state?: boolean
}

const SpentSchema = new Schema<ISpent>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  product: {
    type: String,
  },
  description: {
    type: String,
  },
  state: {
    type: Boolean,
    default: true
  },
})

SpentSchema.methods.toJson = function () {
  const { __v, _id, state, ...spent } = this.toObject()
  return spent
}

const Spent: Model<ISpent> = model<ISpent>('Spent', SpentSchema)

export { ISpent, Spent }
