import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

const generatePdf = async (htmlString: string) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(htmlString)
  const pdfBuffer = await page.pdf({ format: 'A4' })
  await browser.close()

  const pdfPath = path.join(__dirname, 'generated-pdf.pdf')
  fs.writeFileSync(pdfPath, pdfBuffer)

  return { pdfPath }
}

export const pdfService = {
  generatePdf
}
