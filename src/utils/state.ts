import { useState } from "react"

type StateUpdater<State> = (state: State) => State
type SetStateFunction<State> = (updater: StateUpdater<State>) => void

interface GenerateStateManagementToolsOptions<State, I, Actions> {
  getInitialState: (option?: I) => State
  getActions: (setState: SetStateFunction<State>, option?: I) => Actions
}

export const generateStateManagementTools = <State, I, Actions>({
  getInitialState,
  getActions,
}: GenerateStateManagementToolsOptions<State, I, Actions>) => {
  let actions: Actions
  const useAppState = (initArg?: I) => {
    const [state, setState] = useState<State>(() => getInitialState(initArg))
    actions = getActions(setState, initArg)
    return state
  }

  const useAppActions = () => actions

  return {
    useAppState,
    useAppActions,
  }
}
