import Logger from '../libs/logger.util'
import { Request, Response } from 'express'
import { HTTP_STATUS_CODE } from '../types/shared.interface'
import { pdfService } from '../services/pdf.services'

const generatePDF = async (req: Request, res: Response) => {
  try {
    const { htmlString } = req.body
    const { pdfPath } = await pdfService.generatePdf(htmlString)
    res.json({ pdfPath })
  } catch (error) {
    Logger.error(error)
    res
      .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' })
  }
}

export const pdfController = {
  generatePDF
}
