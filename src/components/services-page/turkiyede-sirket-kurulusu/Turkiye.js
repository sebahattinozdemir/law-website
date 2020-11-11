import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Altheader from '../../altheader/Altheader'

export default function Turkiye() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Türkiye'de Şirket Kuruluşu"
                 alttitle="Türkiye'de Şirket Kuruluşu"
                 icon={<HomeWorkIcon style={{fontSize:"35px"}}/>}
            />
            <h1>TÜRKİYE'DE ŞİRKET KURULUŞU</h1>
        </div>
    )
}

