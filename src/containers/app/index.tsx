import React from "react"
import { Layout } from "~/components/Layout"
import { Inputs } from "~/components/Inputs"
import { Preview } from "../preview"
import { useAppState } from "./logics"

import { createPdfUrl } from "~/utils/createPdfUrl"

export const App = () => {
  const state = useAppState()
  return (
    <Layout
      inputs={<Inputs initialValue={state} />}
      preview={<Preview state={state} />}
    />
  )
}
