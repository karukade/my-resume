const endPoint =
  process.env.NODE_ENV === "dev"
    ? "http://localhost:5001/fir-eee-tees/asia-northeast1/getPdf"
    : "https://asia-northeast1-fir-eee-tees.cloudfunctions.net/getPdf"

const forceDownload = (url: string, filename: string) => {
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  a.remove()
}

export const downloadPdf = async (htmlStr: string, fileName: string) => {
  const blob = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: encodeURIComponent(htmlStr),
    }),
  }).then((res) => res.blob())
  forceDownload(URL.createObjectURL(blob), fileName)
}

export const downloadJson = (state: string, fileName: string) => {
  forceDownload(
    URL.createObjectURL(new Blob([state], { type: "application/json" })),
    fileName
  )
}
