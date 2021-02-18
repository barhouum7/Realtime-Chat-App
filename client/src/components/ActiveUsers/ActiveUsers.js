import React from 'react'

import './ActiveUsers.css'
import '../../css/uiFont.css'

const ActiveUsers = ({ numberImgs }) => {
    let usersList = []
    for (let i = 0; i < numberImgs; i++) {
        usersList.push(
                <div className="user" key={"user-active-" + i}>
                    <img src={"https://placeimg.com/100/100/people?" + i} className="blc" alt="Active Users Avatar" />
                    <span className="circleDotIcon icon-circle-full"></span>
                </div>
        )
    }
    
    return (
        <div className="activeUsers onlineUser">
            {usersList}
        </div>
    )
}

export default ActiveUsers