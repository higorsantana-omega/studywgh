const express = require('express')
const app = express()
const socketIO = require('socket.io')

app.use(express.static(__dirname + '/public'))

const server = app.listen(3005)
const io = socketIO(server)

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.io}`)
  socket.emit('messageFromServer', { data: 'Welcome to server!' })
  socket.on('messageFromClient', (data) => {
    console.log(data)
  })

  socket.on('newMessageToServer', (data) => {
    console.log(data)
    io.emit('newMessageToClients', { text: data.text })
  })
})