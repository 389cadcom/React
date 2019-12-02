const debounce = (fn, delay=500) => {
  let timer;
  return function () {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
const throttle = (fn, delay) => {
  let timer, flag = true
  return function() {
    if(flag){
      fn.apply(this, arguments)
      flags = false;
      return false;
    }
    if (timer) return false;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;  
      fn.apply(this, arguments)
    }, delay)
  }
}



export { debounce, throttle }