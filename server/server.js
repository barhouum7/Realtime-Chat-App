const express = require('express')
const app = express() /* Get the App Portion of Express */
const socketIo = require('socket.io')
const http = require('http')



const server = http.createServer(app)
const io = socketIo(server)

