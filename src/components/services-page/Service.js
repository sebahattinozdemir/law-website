import Header from "../header/Header"; 
import GavelIcon from '@material-ui/icons/Gavel';
import React from 'react'
import "./Service.css"

function Service() {
    return (
        <div>
            <Header
                subtitle="Hizmetlerimiz"
                title="Hizmetlerimiz"
                icon={<GavelIcon style={{fontSize:"35px"}}/>}
            />
            <h4>HIZMETLERIMIZ SAYFASI</h4>
        </div>
    )
}

export default Service
