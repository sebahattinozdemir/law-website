import Header from "../header/Header";
import Neden from "./neden/Neden"; 
import Misyon from "./misyon/Misyon";
import Basic from "./basic/Basic";
import BusinessIcon from '@material-ui/icons/Business';
import React from "react";
import "./About.css";
import useDocumentTitle from '../../../useDocumentTitle';



function About() {
    useDocumentTitle('About - Nar Law and Consultancy');
    return (
        <div >
            <Header
                subtitle="About"
                title="About"
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
