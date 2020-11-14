import ReactPlayer from "react-player";
import React from 'react'

export default function Player() {
    return (
        <div className="Player" style={{width:"auto",height:"auto"}}>
            <ReactPlayer style={{border:"0.5em solid orange",margin:"auto"}}
                url="https://www.youtube.com/watch?v=puxC0ugcVpM"
            />
            
        </div>
    )
}


