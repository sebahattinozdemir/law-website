import Header from "../header/Header"; 
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div>
            <Header
                subtitle="İletişim"
                title="İletişim"
                icon={<ContactPhoneIcon style={{fontSize:"35px"}}/>}
            />
            <h4>CONTACT PAGE</h4>
        </div>
    )
} 

export default Contact
