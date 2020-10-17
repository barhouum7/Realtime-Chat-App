const express = require('express')
const app = express() /* Get the App Portion of Express */
const socketIo = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000


const server = http.createServer(app)
const io = socketIo(server)

app.listen(PORT, (error) => {
    error ?
        console.log(`\nERROR! Something Went Wrong.\n`) :
        console.log(`\nServer is listening on PORT: ${PORT}\n`)
}) /* Telling to our App that we want to Listening on Certain PORT */