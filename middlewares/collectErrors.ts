import { Response, Request, NextFunction } from 'express'
import { Result, ValidationError, validationResult } from 'express-validator'

const collectErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors: Result<ValidationError> = validationResult(req)

  !errors.isEmpty() ? res.status(400).json(errors) : next()
}

export { collectErrors }
