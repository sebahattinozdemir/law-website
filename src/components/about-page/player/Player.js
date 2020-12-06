import ReactPlayer from "react-player";
import "./Player.css";
import React from 'react';
import Manastır from "./manastır.mp4";



export default function Player() {
    return (
        <div className="row" style={{margin:"0%",paddingTop:"1%"}}>
            <div className="video-wrapper" style={{width:"auto",height:"auto"}}> 
               
            
              
                <ReactPlayer className="col-lg-4 col-md-6 col-sm-6 col-12" style={{margin:"auto",overFlow:"hidden"}}
                    url={Manastır}
                    className='react-player fixed-bottom'
                    controls = {true}
                    width='100%'
                    height='auto'
                    
                
                   
                />
               
               

             

            </div>


        </div>
    )
}


