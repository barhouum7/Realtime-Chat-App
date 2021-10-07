import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { AwesomeButton } from 'react-awesome-button'
import "react-awesome-button/dist/styles.css"
import 'react-awesome-button/dist/themes/theme-rickiest.css'

import './Join.css'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="mainContainer">
            
            <a href="https://cityivast.co.uk/">
                <div className="logo"><img src="logo/logo(2).png" alt="Logo" />
            </div>
            </a>
            
            <div className="joinOuterContainer">
                    <h1 className="heading-1">
                        Hang out online with your co-workers on <span className="hvr-bounce-to-right">CITY I-VAST</span> online chat rooms.
                    </h1>
                <div className="joinInnerContainer">
                    <h2 className="heading-2 hvr-bounce-to-right">
                        OPEN A CHAT ROOM NOW!
                    </h2>
                    <div>
                        <input className="joinInput" type="text" placeholder="Name: John" onChange={(event) => {
                            setName(event.target.value)
                        }} />
                    </div>
                    <div>
                        <input className="joinInput mt-20" type="text" placeholder="Room: JavaScript Talk" onChange={(event) => {
                            setRoom(event.target.value)
                        }} />
                    </div>
                    {/* <Link onClick={ event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type="primary">Sign In</button>
                    </Link> */}
                    <Link onClick={ event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <AwesomeButton 
                    className="mt-20"
                    size="large"
                    type="link"
                    >
                        Sign In
                    </AwesomeButton>
                    </Link>
                </div>
            </div>
            <img className="my-signature" src="logo/my-signature.png" alt="My Signature" />
        </div>
    )
}

export default Join