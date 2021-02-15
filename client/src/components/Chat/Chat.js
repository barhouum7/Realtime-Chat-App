import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'

let socket
const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const ENDPOINT = 'localhost:5000'
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        
        socket = io(ENDPOINT)
        
        setName(name)
        setRoom(room)

        // console.log(socket)
        socket.emit('join', {name, room}, () => {

        })

        return () => {
            socket.emit('disconnect')

            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]) /* Since we cannot mutate state, so we can spread all other messages and then ADD a new message on it. */
        })
    }, [messages])

    /** Function for sending messages */
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages)

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar />
                {/* <input 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                /> */}
            </div>
        </div>
    )
}

export default Chat