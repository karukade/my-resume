const endPoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001/fir-eee-tees/us-central1/getPdf"
    : "http://localhost:5001/fir-eee-tees/us-central1/getPdf"

export const createPdfUrl = async (htmlStr: string) => {
  const blob = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: htmlStr,
    }),
  }).then((res) => res.blob())
  return URL.createObjectURL(blob)
}
