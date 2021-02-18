import React from 'react'

import './Input.css'
import '../../css/uiFont.css'

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className="form">
            <div className="input">
                <input 
                    className="input-message"
                    type="text"
                    placeholder="Type a message..."
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <i className="sendMessageIcon icon-send" onClick={(event) => sendMessage(event)}></i>
            </div>
        </form>
    )
}

export default Input

