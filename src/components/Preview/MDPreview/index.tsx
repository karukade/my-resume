import React from "react"
import { useMDToHtml } from "~/utils/hooks"

export const MDPreview: React.FC<{
  mdString: string
  tag?: string
  className?: string
}> = ({ tag = "div", mdString, className }) => {
  const [__html] = useMDToHtml(mdString)
  const props = {
    dangerouslySetInnerHTML: { __html },
    className,
  }
  return React.createElement(tag, props)
}
