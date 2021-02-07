function formateDateTime(dateTime) {
  const date = [
    ('0000' + dateTime.getFullYear()).slice(-4),
    ('00' + (dateTime.getMonth() + 1)).slice(-2),
    ('00' + dateTime.getDate()).slice(-2)
  ]

  const time = [
    ('00' + dateTime.getHours()).slice(-2),
    ('00' + dateTime.getMinutes()).slice(-2),
    ('00' + dateTime.getSeconds()).slice(-2)
  ]

  return date.join('-') + ' ' + time.join(':')
}

module.exports = formateDateTime