import * as functions from "firebase-functions"
import * as puppeteer from "puppeteer"

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: "1GB",
} as const

const appHost = "gen-resume.netlify.app"

export const getPdf = functions
  .region("asia-northeast1")
  .runWith(runtimeOpts)
  .https.onRequest(async (request, response) => {
    setHeader(response, appHost)
    if (request.hostname !== appHost) {
      response.status(403).end()
      return
    }

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`data:text/html,${request.body.content}`, {
      waitUntil: "networkidle0",
    })
    await page.emulateMediaType("screen")

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    })

    await browser.close()

    response.send(pdf)
  })

const setHeader = (response: functions.Response, host: string) => {
  response.setHeader("Content-Type", "application/pdf")
  response.setHeader("Access-Control-Allow-Origin", `https://${host}/`)
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  response.setHeader("Access-Control-Allow-Headers", "Content-Type")
}
