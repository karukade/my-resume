import * as functions from "firebase-functions"
import * as puppeteer from "puppeteer"

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: "1GB",
} as const

export const getPdf = functions
  .region("asia-northeast1")
  .runWith(runtimeOpts)
  .https.onRequest(async (request, response) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`data:text/html,${request.body.content}`, {
      waitUntil: "networkidle0",
    })
    await page.evaluate(() => {
      const font = window.getComputedStyle(document.body).fontFamily
      const p = document.createElement("p")
      p.style.fontSize = "30px"
      p.innerText = font
      document.body.append(p)
    })
    await page.emulateMediaType("screen")
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    })
    await browser.close()
    response.setHeader("Content-Type", "application/pdf")
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Headers", "*")
    response.send(pdf)
  })
