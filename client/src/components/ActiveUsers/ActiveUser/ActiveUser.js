import React from 'react'

import './ActiveUser.css'
import '../../../css/uiFont.css'

const ActiveUser = () => {
    
    return (
        <div className="avatarContainer">
            <div className="currentUser">
                    <img src="https://placeimg.com/100/100/people" className="img" alt="Active Users Avatar" />
                    <span className="circleDotIconImg icon-circle-full"></span>
            </div>
        </div>
    )
}

export default ActiveUser