import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "antd"
import { PreviewComponent } from "~/components/Preview"
import { renderToString } from "~/utils/render"
import { StateType } from "../app/logics"
import { createPdfUrl } from "~/utils/createPdfUrl"
import { markDownToHtml } from "~/utils/remark"
type Props = {
  state: StateType
}

const transformState = async (state: StateType): Promise<StateType> => {
  const works = await Promise.all(
    state.worksVitae.works.map(async (work) => {
      return {
        ...work,
        charge: await markDownToHtml(work.charge),
        tool: await markDownToHtml(work.tool),
      }
    })
  )
  return {
    ...state,
    worksVitae: {
      ...state.worksVitae,
      works,
    },
  }
}

export const Preview: React.FC<Props> = ({ state }) => {
  const [url, setUrl] = useState<string | null>(null)

  const onClick = async () => {
    const transformed = await transformState(state)
    const html = renderToString(() => <PreviewComponent data={transformed} />)
    const url = await createPdfUrl(html)
    setUrl(url)
  }

  return (
    <PreviewLayout>
      <PreviewComponent data={state} />
      <div className="btn">
        {url && (
          <Button href={url} download="職務経歴書.pdf">
            ダウンロード
          </Button>
        )}
        <Button onClick={onClick} type="primary">
          PDFにする
        </Button>
      </div>
    </PreviewLayout>
  )
}

const PreviewLayout = styled.div`
  overflow: auto;
  height: 100%;
  > .btn {
    bottom: 30px;
    right: 10px;
    position: fixed;
    text-align: center;
  }
`
