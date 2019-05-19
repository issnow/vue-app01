export const debounce = (fn, delay) => {
  var timer
  return function(...arr) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arr)
    }, delay)
  }
}
