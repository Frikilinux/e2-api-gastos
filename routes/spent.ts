import { Router } from 'express'
import { createSpent, getSpents, getSpentsByUser } from '../controllers/spents'
import { spentValidations } from '../validations/spent'

const router = Router()

router.get('/', getSpents)
router.get('/:user', getSpentsByUser )

router.post('/', spentValidations, createSpent)

export default router
