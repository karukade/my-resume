import React, { useEffect, useRef } from "react"
import { Button, Space, Upload } from "antd"
import { PreviewLayout } from "~/components/Preview/PreviewLayout"
import { PreviewComponent } from "~/components/Preview"
import { renderToString } from "~/utils/render"
import { useAppActions } from "../app/logics"
import { StateType } from "../app/type"
import { downloadPdf, downloadJson } from "~/utils/downloadPdf"
import { transformState } from "./transformState"

type Props = {
  state: StateType
}

export const Preview: React.FC<Props> = ({ state }) => {
  // const iframeRef = useRef<HTMLIFrameElement>(null)
  const { setState } = useAppActions()
  const onClick = async () => {
    const transformed = await transformState(state)
    const html = renderToString(() => <PreviewComponent data={transformed} />)
    downloadPdf(html, "職務経歴書.pdf")
    downloadJson(JSON.stringify(state), "resume.json")
  }

  const onChange = (param: any) => {
    const fileReader = new FileReader()
    fileReader.readAsText(param.file)
    fileReader.onloadend = () => {
      setState(JSON.parse(fileReader.result as string))
    }
  }

  // useEffect(() => {
  //   ;(async () => {
  //     if (!iframeRef.current) return
  //     const scrollPos = iframeRef.current.contentWindow?.scrollY
  //     const transformed = await transformState(state)
  //     const html = renderToString(() => <PreviewComponent data={transformed} />)
  //     const blob = new Blob([html], {
  //       type: "text/html",
  //     })
  //     if (scrollPos) {
  //       iframeRef.current.onload = () => {
  //         iframeRef.current?.contentWindow?.scrollTo(0, scrollPos)
  //       }
  //     }
  //     iframeRef.current.src = URL.createObjectURL(blob)
  //   })()
  // }, [state])

  return (
    <PreviewLayout
      button={
        <Space>
          <Button onClick={onClick} type="primary">
            PDFにする
          </Button>
          <Upload showUploadList={false} customRequest={onChange}>
            jsonでインポート
          </Upload>
        </Space>
      }
    >
      {/* <iframe
        ref={iframeRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></iframe> */}
      <PreviewComponent data={state} />
    </PreviewLayout>
  )
}
