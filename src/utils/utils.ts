type DebounceOption = {
  waitTime?: number
  useAnimationFrame?: boolean
}

export const debounce = <P extends unknown[]>(
  func: (...args: P) => void,
  option: DebounceOption = {
    waitTime: 200,
  }
): ((...args: P) => void) => {
  let timer: number
  const start = option.useAnimationFrame ? requestAnimationFrame : setTimeout
  const cancel = option.useAnimationFrame ? cancelAnimationFrame : clearTimeout
  return (...args) => {
    if (timer) cancel(timer)
    timer = start(() => func(...args), option.waitTime ? option.waitTime : 200)
  }
}
