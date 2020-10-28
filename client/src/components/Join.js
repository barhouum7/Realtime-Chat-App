import React, { useState, } from 'react'
import { link } from react-router-dom

import './Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">
                    Join
                </h1>
                <div>
                    <input className="joinInput" type="text" placeholder="Name" onChange={(event) => {
                        setName(event.target.value)
                    }} />
                </div>
                <div>
                    <input className="joinInput mt-20" type="text" placeholder="Room" onChange={(event) => {
                        setRoom(event.target.value)
                    }} />
                </div>
                <link onClick={ event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </link>
            </div>
        </div>
    )
}

export default Join