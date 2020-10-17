import React, { useState } from "react"
import { markDownToHtml } from "./utils/remark"

export const Test: React.FC = () => {
  const [markDown, setMarkDown] = useState("")
  const [html, setHTML] = useState("")
  const onChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setMarkDown(e.target.value)
    const html = await markDownToHtml(e.target.value)
    setHTML(html as string)
  }

  return (
    <div>
      <textarea onChange={onChange}></textarea>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
