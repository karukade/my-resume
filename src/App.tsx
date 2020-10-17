import React, { useState } from "react"
import styled from "styled-components"

import { renderToString } from "./render"
import { createPdfUrl } from "./createPdfUrl"
import { Paper } from "./Paper"

export const App: React.FC<{ className?: string }> = ({ className }) => {
  const onClick = async () => {
    const str = renderToString(() => <Paper data={state} />)
    const url = await createPdfUrl(str)
    setPdfUrl(url)
  }
  const [pdfUrl, setPdfUrl] = useState<string>()
  const [state, setState] = useState({
    name: "カデカル志朗",
    accounts: {
      github: "",
      qiita: "",
      portfolio: "",
    },
    summary: "",
    history: [
      {
        span: "",
        company: "",
        jobs: [
          {
            span: "",
            name: "",
            charge: [""],
            tool: [""],
          },
        ],
      },
    ],
    education: [
      {
        name: "",
        major: "",
        end: "",
      },
    ],
    skills: [],
  })
  return (
    <div className={className}>
      <div className="item">input</div>
      <div className="item">
        <button onClick={onClick}>CreatePDF</button>
        {pdfUrl && (
          <a href={pdfUrl} download="test.pdf">
            Download pdf
          </a>
        )}
      </div>
    </div>
  )
}

export const StyledApp = styled(App)`
  height: 100vh;
  display: flex;
  > .item {
    flex: 50% 1 0;
  }
`
