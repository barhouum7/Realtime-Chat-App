import React from 'react'

import './InfoBar.css'
import '../../css/uiFont.css'

const InfoBar = ({room, name}) => {
    
    return (
            <div className="infoBar">
                <a href="/"><i className="closeIcon icon-exit_to_app"></i></a>
                <div className="leftInnerContainer">
                    <h3><i className="personIcon icon-person"></i>{name} - State (Online)<br /><i className="personIcon icon-meeting_room"></i> {room} Talk</h3>
                </div>
                
                <div className="iconsContainer">
                    <i className="callIcon icon-call"></i>
                    <i className="callIcon icon-video-camera"></i>
                </div>
            </div>
    )
        
}

export default InfoBar