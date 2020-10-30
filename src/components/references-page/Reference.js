import Header from "../header/Header"; 
import GroupIcon from '@material-ui/icons/Group';
import React from 'react'
import "./Reference.css"
function Reference() {
    return (
        <div>
            <Header
                subtitle="Referanslarımız"
                title="Referanslarımız"
                icon={<GroupIcon style={{fontSize:"35px"}}/>}
            />
                <h4>REFERANS SAYFASI</h4>
        </div>
    )
}

export default Reference
