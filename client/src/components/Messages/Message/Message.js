import React from 'react'
import ReactEmoji from 'react-emoji'

// import ActiveUsers from '../../ActiveUsers/ActiveUsers'

import './Message.css'

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">
                    {trimmedName}
                </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
                {/* <ActiveUsers className="onlineUser" numberImgs={1} /> */}
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">
                    {/* <ActiveUsers className="onlineUser" numberImgs={1} /> */}
                    {user}
                </p>
            </div>
        )
    )
}

export default Message