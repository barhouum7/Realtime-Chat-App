import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

const Chat = () => {
    useEffect(({location}) => {
        const data = queryString.parse(location.search)
    })

    return (
        <h1>This is the Chat Component.</h1>
    )
}

export default Chat