import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import Altheader from '../../altheader/Altheader'



export default function Turk() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Türk Vatandaşlığı"
                 alttitle="Türk Vatandaşlığı"
                 icon={<StarRateIcon style={{fontSize:"35px"}}/>}
            />
            <h1>TÜRK VATANDAŞLIĞI</h1>
        </div>
    )
}
