import { useState, useEffect } from "react"
import { markDownToHtml } from "~/utils/remark"

export const useMDToHtml = (...props: string[]) => {
  const states = props.map((prop) => useState(prop))

  props.forEach((prop, i) => {
    useEffect(() => {
      if (!prop) return
      const toHtml = async () => {
        const html = await markDownToHtml(prop)
        states[i][1](html as string)
      }
      toHtml()
    }, [prop])
  })

  return states.map(([state]) => state)
}
