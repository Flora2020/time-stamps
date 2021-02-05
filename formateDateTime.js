function formateDateTime(dateTime, punctuation) {
  //sample of dateTime: Fri Feb 05 2021 16:18:32 GMT+0800 (Taipei Standard Time)
  //取出日期
  const date = dateTime.toString().slice(4, 15)
  const dateArray = date.split(' ')

  //將月份從英文轉換為數字
  const monthInEng = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let monthInNum = monthInEng.findIndex(month => {
    return month === dateArray[0]
  }) + 1
  monthInNum = monthInNum.toString()

  if (monthInNum.length === 1) {
    dateArray[0] = '0' + monthInNum
  } else {
    dateArray[0] = monthInNum
  }

  //取出時間
  const time = dateTime.toString().slice(15, 24)

  //將日期拼成設計稿上的格式
  return `${dateArray[2]}${punctuation}${dateArray[0]}${punctuation}${dateArray[1]}${time}`
}

module.exports = formateDateTime