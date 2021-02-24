/* Here in order to load that Variable inside dotenv file
    we just do a simple check If we are 
    running in the production environment or Not... */
    const dotENV = require('dotenv')
    if (process.env.NODE_ENV !== 'production') {
        dotENV.config()
    }

const express = require('express')
const app = express() /* Get the App Portion of Express */
const socketIo = require('socket.io')
const http = require('http')
const cors = require('cors')
const path = require('path')

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js')

const PORT = process.env.PORT || 5000

// const mainRouter = require('./router')

const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room})
        if (error) return callback(error)

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the ${user.room} room.`})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined this room!`})

        socket.join(user.room)

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) } )

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message})
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) } )

        callback()
    })

    socket.on('disconnect', () => {
    // console.log('\n\n\tUser had left!!!')
        const user = removeUser(socket.id)

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has left!` } )
        }
    })
})

// app.use(mainRouter)
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    // Serve the static files from the React app
    // app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.use(express.static(path.resolve('client/build')))
    // Handles any requests that don't match the ones in the routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname+'/client/build/index.html'))
    // })
}

server.listen(PORT, (error) => {
    error ?
        console.log(`\nERROR! Something Went Wrong.\n`) :
        console.log(`\nServer is listening on PORT: ${PORT}\n`)
}) /* Telling to our App that we want to Listening on Certain PORT */