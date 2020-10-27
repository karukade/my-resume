import React, { Suspense } from "react"
import { Layout } from "~/components/layout"
import { useAppState, useSetLocalStorage } from "./logics"

const Inputs = React.lazy(() => import("../inputs/"))
const Preview = React.lazy(() => import("../preview/"))

export const App = () => {
  const state = useAppState()
  useSetLocalStorage(state)
  return (
    <Layout
      inputs={
        <Suspense fallback="loading">
          <Inputs initialValue={state} />
        </Suspense>
      }
      preview={
        <Suspense fallback="loading">
          <Preview state={state} />
        </Suspense>
      }
    />
  )
}
