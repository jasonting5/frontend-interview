// 节流的原理很简单：
// 如果你持续触发事件，每隔一段时间，只执行一次事件
// 两种实现方案
// 1.第一种是用时间戳来判断是否已到执行时间;
// 2.使用定时器。
/**
 * 
 * @param {需要执行的函数} fn 
 * @param {时间间隔} wait 
 */
const throttleByTimeStamp = (fn, wait = 50) => {
  // 上一次执行 fn 的时间
  let previous = 0
  return () => {
    // 获取当前时间，转换成时间戳
    let now = +new Date()
    if (now - previous > wait) {
      // 大于等待时间
      // 执行函数
      // 把 previous 设置为当前时间
      fn.apply(this, arguments)
      previous = now
    }
  }
}
/**
 * 
 * @param {需要执行的函数} fn 
 * @param {时间间隔} wait 
 */
const throttleByTimer = (fn, wait = 50) => {
  let timeout
  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, arguments)
      }, wait)
    }
  }
}