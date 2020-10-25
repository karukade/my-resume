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
    await page.setContent(request.body.content)
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
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
