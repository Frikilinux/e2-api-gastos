import { Router } from 'express'
import { createSpent, getSpents, getSpentsByUser } from '../controllers/spents'

const router = Router()

router.get('/', getSpents)
router.get('/:user', getSpentsByUser )

router.post('/', createSpent)

export default router
