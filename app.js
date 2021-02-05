const express = require('express')
const formateDateTime = require('./formateDateTime.js')
const app = express()
const port = 3000

let timeGettingReq = 0

app.use((req, res, next) => {
  timeGettingReq = Date.now()
  const dateTime = formateDateTime(Date(), '-')
  const reqMethod = req.method
  const reqUrl = req.originalUrl

  console.log(`${dateTime} | ${reqMethod} from ${reqUrl}`)
  next()
})

app.get('/', (req, res) => {
  const timeSendingRes = Date.now()
  const dateTime = formateDateTime(Date(), '-')
  const reqMethod = req.method
  const reqUrl = req.originalUrl

  console.log(`${dateTime} | ${reqMethod} from ${reqUrl} | total time: ${timeSendingRes - timeGettingReq}ms`)
  timeGettingReq = 0
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})