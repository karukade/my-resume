import React, { useEffect } from "react"
import { Layout } from "~/components/Layout"
import { Inputs } from "~/components/Inputs"
import { Preview } from "../preview"
import { useAppState, useSetLocalStorage } from "./logics"

export const App = () => {
  const state = useAppState()
  useSetLocalStorage(state)
  return (
    <Layout
      inputs={<Inputs initialValue={state} />}
      preview={<Preview state={state} />}
    />
  )
}
