const formateDateTime = require('./formateDateTime.js')

function timestamp(dateTime, req, timeGettingReq) {
  dateTime = formateDateTime(dateTime, '-')
  const dateTimeLog = `${dateTime} | ${req.method} from ${req.originalUrl}`

  const timeSendingRes = Date.now()
  const totalTime = timeSendingRes - timeGettingReq

  if (timeGettingReq) {
    console.log(`${dateTimeLog} | total time: ${totalTime}ms`)
    timeGettingReq = 0
  } else {
    console.log(dateTimeLog)
  }
  return timeGettingReq
}

module.exports = timestamp