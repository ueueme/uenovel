/**
 * 监听localStorage的setItem操作，并在每次设置项时触发一个自定义事件setItemEvent
 * @returns {void} 该函数没有返回值
 */
function dispatchEventStorage () {
  const signSetItem = localStorage.setItem
  localStorage.setItem = function (key, val) {
    let setEvent = new Event('setItemEvent')
    setEvent.key = key
    setEvent.newValue = val
    window.dispatchEvent(setEvent)
    signSetItem.apply(this, arguments)
  }
}
