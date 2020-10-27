import { useEffect } from "react"
import { generateStateManagementTools } from "~/utils/state"
import {
  getStateFromLocalStorage,
  setStateToLocalStorage,
} from "~/utils/localStorage"
import { initialState } from "./data"
import { StateType } from "./type"

const getInitialState = (): StateType => {
  const storedState = getStateFromLocalStorage()
  return storedState || initialState
}

export const { useAppState, useAppActions } = generateStateManagementTools({
  getInitialState,
  getActions: (setState) => ({
    updateState: <T extends StateType[keyof StateType]>(
      value: T,
      key: keyof StateType
    ) => {
      setState((state) => ({
        ...state,
        [key]: value,
      }))
    },
    setState: (state: StateType) => {
      setState(() => state)
    },
  }),
})

export const useSetLocalStorage = (state: StateType) => {
  useEffect(() => {
    const onBeforeunload = () => {
      setStateToLocalStorage(state)
    }
    window.addEventListener("beforeunload", onBeforeunload)
    return () => window.removeEventListener("beforeunload", onBeforeunload)
  }, [state])
}
