const formateDateTime = require('./formateDateTime.js')

function timestamp(dateTime, req) {
  const log = [
    formateDateTime(dateTime),
    `${req.method} from ${req.originalUrl}`
  ]

  if (req.timeGettingReq) {
    log.push(`total time: ${Date.now() - req.timeGettingReq}ms`)
  }

  return log.join(' | ')
}

module.exports = timestamp