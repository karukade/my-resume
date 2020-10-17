import unified from "unified"
import markdown from "remark-parse"
import remark2rehype from "remark-rehype"
import html from "rehype-stringify"

const processor = unified().use(markdown).use(remark2rehype).use(html)

//@ts-ignore
//processor が内部で呼び出す Vfileがcwdを使おうとするため
window.process = {
  cwd: () => "/",
}

export const markDownToHtml = async (markDownString: string) => {
  const { contents } = await processor.process(markDownString)
  return contents as string
}
