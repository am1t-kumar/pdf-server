import { ValidationError } from 'joi'
import { Request, Response, NextFunction } from 'express'
import { ERROR_MESSAGE, HTTP_STATUS_CODE } from '../types/shared.interface'
import { pdfBodySchema } from '../schemas/pdf.schemas'

const generatePdfMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await pdfBodySchema.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error: Error | any) {
    const validationErrors = error.details.map(
      (detail: ValidationError) => detail.message
    )
    return res.status(HTTP_STATUS_CODE.OK).json({
      message: ERROR_MESSAGE.VALIDATION_ERROR,
      errors: validationErrors,
      status: HTTP_STATUS_CODE.BAD_REQUEST
    })
  }
}

export const pdfMiddleware = {
  generatePdfMiddleware
}
