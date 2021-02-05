const express = require('express')
const timestamp = require('./timestamp.js')

const app = express()
const port = 3000

let timeGettingReq = 0

app.use((req, res, next) => {
  timestamp(Date(), req, timeGettingReq)
  timeGettingReq = Date.now()
  next()
})

app.get('/', (req, res) => {
  timeGettingReq = timestamp(Date(), req, timeGettingReq)
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  timeGettingReq = timestamp(Date(), req, timeGettingReq)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  timeGettingReq = timestamp(Date(), req, timeGettingReq)
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  timeGettingReq = timestamp(Date(), req, timeGettingReq)
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})