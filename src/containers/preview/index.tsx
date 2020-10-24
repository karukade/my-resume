import React from "react"
import { Button } from "antd"
import { PreviewLayout } from "~/components/Preview/PreviewLayout"
import { PreviewComponent } from "~/components/Preview"
import { renderToString } from "~/utils/render"
import { StateType } from "../app/type"
import { downloadPdf } from "~/utils/downloadPdf"
import { transformState } from "./transformState"

type Props = {
  state: StateType
}

export const Preview: React.FC<Props> = ({ state }) => {
  const onClick = async () => {
    const transformed = await transformState(state)
    const html = renderToString(() => <PreviewComponent data={transformed} />)
    downloadPdf(html, "職務経歴書.pdf")
  }

  return (
    <PreviewLayout
      button={
        <>
          <Button onClick={onClick} type="primary">
            PDFにする
          </Button>
        </>
      }
    >
      <PreviewComponent data={state} />
    </PreviewLayout>
  )
}
