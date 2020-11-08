import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let socket
const Chat = ({location}) => {
    const {name, setName} = useState('')
    const {room, setRoom} = useState('')
    const ENDPOINT = 'localhost:5000'
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        
        socket = io(ENDPOINT)
        
        // setName(name)
        // setRoom(room)

        // console.log(socket)
        socket.emit('join', {name, room}, () => {

        })

        return () => {
            socket.emit('disconnect')

            socket.off()
        }
    }, [ENDPOINT, location.search])

    return (
        <h1>This is the Chat Component.</h1>
    )
}

export default Chat