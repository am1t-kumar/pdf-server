import Joi from 'joi'

export const pdfBodySchema = Joi.object({
  htmlString: Joi.string().required()
})
