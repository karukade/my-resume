const storageKey = "RESUME"

export const setStateToLocalStorage = <State extends Record<string, unknown>>(
  state: State
) => {
  localStorage.setItem(storageKey, JSON.stringify(state))
}

export const getStateFromLocalStorage = () => {
  const state = localStorage.getItem(storageKey)
  if (!state) return null
  return JSON.parse(state)
}
