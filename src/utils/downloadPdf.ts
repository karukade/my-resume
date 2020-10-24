const endPoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001/fir-eee-tees/us-central1/getPdf"
    : "http://localhost:5001/fir-eee-tees/us-central1/getPdf"

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
      content: htmlStr,
    }),
  }).then((res) => res.blob())
  forceDownload(URL.createObjectURL(blob), fileName)
}
