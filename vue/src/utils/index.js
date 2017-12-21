const parseCreateTime = (timestamp) => {
  const now = +new Date()
  let DD = 0 // 天
  let HH = 0 // 时
  let mm = 0 // 分
  let ss = ~~((now - timestamp) / 1000) // 秒
  if (ss >= 60) {
    mm = ~~(ss / 60)
    if (mm >= 60) {
      HH = ~~(mm / 60)
      if (HH >= 24) {
        DD = ~~(HH / 24)
        return `${DD}天前`
      } else {
        return `${HH}小时前`
      }
    } else {
      return `${mm}分钟前`
    }
  } else {
    return '刚刚'
  }
}

export {
  parseCreateTime
}
