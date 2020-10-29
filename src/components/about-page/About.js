import Header from "../header/Header"; 
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
            <h4>ABOUT PAGE</h4>
        </div>
    )
}

export default About
