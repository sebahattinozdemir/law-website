import Header from "../header/Header";
import Neden from "./neden/Neden"; 
import Misyon from "./misyon/Misyon";
import Basic from "./basic/Basic";
import BusinessIcon from '@material-ui/icons/Business';
import React, { useState, useEffect } from "react";
import "./About.css";
import db from "../../firebase";


function About() {

    return (
        <div >
            <Header
                subtitle="Hakkımızda"
                title="Hakkımızda"
                icon={<BusinessIcon style={{fontSize:"35px"}}/>}
                
            />
            <div className="row" style={{margin:"0%"}}>
                <Basic/>
                <Neden/>
                <Misyon/>
            </div>
            
           
            
            
            
        </div>
    )
}

export default About
