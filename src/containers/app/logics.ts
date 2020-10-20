import { useEffect } from "react"
import { generateStateManagementTools } from "~/utils/state"
import {
  getStateFromLocalStorage,
  setStateToLocalStorage,
} from "~/utils/localStorage"
import { initialState } from "./data"
import { StateType, PersonType, WorksVitaeType } from "./type"

const getInitialState = (): StateType => {
  const storedState = getStateFromLocalStorage()
  return initialState
  // return storedState || initialState
}

export const { useAppState, useAppActions } = generateStateManagementTools({
  getInitialState,
  getActions: (setState) => ({
    setState: <T extends StateType[keyof StateType]>(
      value: T,
      key: keyof StateType
    ) => {
      setState((state) => ({
        ...state,
        [key]: value,
      }))
    },

    setSummary: (summary: StateType["summary"]) => {
      setState((state) => ({
        ...state,
        summary,
      }))
    },

    setWorksVitae: (worksVitae: WorksVitaeType) => {
      setState((state) => {
        return {
          ...state,
          worksVitae,
        }
      })
    },
  }),
})

export const useSetLocalStorage = (state: StateType) => {
  useEffect(() => {
    const onBeforeunload = () => {
      console.log("beforeunload")
      setStateToLocalStorage(state)
    }
    window.addEventListener("beforeunload", onBeforeunload)
    return () => window.removeEventListener("beforeunload", onBeforeunload)
  }, [state])
}
