import { Router } from 'express'
import { PDF_ROUTE } from '../types/pdf.interface'
import { pdfController } from '../controllers/pdfControllers'
import { pdfMiddleware } from '../middlewares/pdfMiddleware'

const router = Router()

router.post(
  PDF_ROUTE.GENERATE,
  pdfMiddleware.generatePdfMiddleware,
  pdfController.generatePDF
)

export default router
