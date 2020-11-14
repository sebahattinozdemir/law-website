import Header from "../header/Header";
import Neden from "./neden/Neden"; 
import Misyon from "./misyon/Misyon";
import Basic from "./basic/Basic";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'
import "./About.css";
function About() {
    return (
        <div>
            <Header
                subtitle="Hakkımızda"
                title="Hakkımızda"
                icon={<BusinessIcon style={{fontSize:"35px"}}/>}
                
            />
            <Basic/>
            <Neden/>
            <Misyon/>
           
            
            
            
        </div>
    )
}

export default About
