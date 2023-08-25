import { Router } from 'express'
import { createUser, getUserByUserName, getUsers } from '../controllers/users'

const router = Router()

router.get('/', getUsers)
router.get('/:username', getUserByUserName)
// router.get('/:dni', getUserByDni)
router.post('/', createUser)

export default router
