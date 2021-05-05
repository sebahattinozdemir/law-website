import Header from "../header/Header";
import Neden from "./neden/Neden"; 
import Misyon from "./misyon/Misyon";
import Basic from "./basic/Basic";
import BusinessIcon from '@material-ui/icons/Business';
import useDocumentTitle from '../../../useDocumentTitle';
import React from "react";
import "./About.css";



function About() {
    useDocumentTitle('Hakkımızda - Nar Göç ve Danışmanlık')
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
