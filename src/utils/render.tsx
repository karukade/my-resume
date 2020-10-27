import React from "react"
import ReactDomServer from "react-dom/server"
import { ServerStyleSheet } from "styled-components"

type Params = {
  style: string
  content: string
}

const htmlTemplate = ({ style, content }: Params) => `
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap);</style>
        ${style}
    </head>
    <body>
       ${content}
    </body>
</html>
`

export const renderToString = (Component: React.FunctionComponent) => {
  const sheet = new ServerStyleSheet()
  const content = ReactDomServer.renderToStaticMarkup(
    sheet.collectStyles(<Component />)
  )
  const style = sheet.getStyleTags()
  sheet.seal()
  return htmlTemplate({ style, content })
}
