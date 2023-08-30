import { Router } from 'express'
import { createUser, getUserByUserName, getUsers } from '../controllers/users'
import { userValidations } from '../validations/user'

const router = Router()
router.get('/', getUsers)
router.get('/:username', getUserByUserName)
router.post('/', userValidations, createUser)

export default router
