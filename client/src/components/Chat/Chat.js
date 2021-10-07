import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

// import Avatar from 'avataaars'

import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import ActiveUsers from '../ActiveUsers/ActiveUsers'
import ActiveUser from '../ActiveUsers/ActiveUser/ActiveUser'
import Messages from '../Messages/Messages'

import './Chat.css'
import '../../css/uiFont.css'

let socket
const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const ENDPOINT = 'https://students-cyber-space.herokuapp.com/'
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        
        socket = io(ENDPOINT)
        
        setName(name)
        setRoom(room)

        // console.log(socket)
        socket.emit('join', {name, room}, (error) => {
            if (error) alert('Something Went Wrong on Joining!\n'+error)
        })

        // return () => {
        //     socket.emit('disconnect')

        //     socket.off()
        // }
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

    // console.log(message, messages)
    let numberImgs = 0
    return (
        <div className="outerContainer">
            <div className="chat-room-logo"><img src="logo/logo(2).png" alt="Logo In Chat Room" /></div>
                    {/* <img className="avatar" src="https://placeimg.com/100/100/people" alt="Users Avatar" /> */}
                    <ActiveUser />
                    {/* <div className="onlineIcon"><span className="dotIcon-1 icon-circle-full"></span></div> */}
                    
                    {/* <Avatar
                        style={{width: '100px', height: '55px', margin: '0', padding: '0'}}
                        avatarStyle='Circle'
                        topType='LongHairMiaWallace'
                        accessoriesType='Prescription02'
                        hairColor='BrownDark'
                        facialHairType='Blank'
                        clotheType='Hoodie'
                        clotheColor='PastelBlue'
                        eyeType='Happy'
                        eyebrowType='Default'
                        mouthType='Smile'
                        skinColor='Light'
                    /> */}
            <div className="container">
                <div className="infoBarContainer">
                    <InfoBar room={room} name={name} />
                    <ActiveUsers numberImgs={numberImgs+6} />
                </div>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat