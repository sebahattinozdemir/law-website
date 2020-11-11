import React from 'react';
import HealingIcon from '@material-ui/icons/Healing';
import Altheader from '../../altheader/Altheader'

export default function Saglik() {
    return (
        <div>
            <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Sağlık Sigorta Poliçesi"
                 alttitle="Sağlık Sigorta Poliçesi"
                 icon={<HealingIcon style={{fontSize:"35px"}}/>}
            />
            <h1>SAĞLIK SİGORTA POLİÇESİ</h1>
        </div>
    )
}
