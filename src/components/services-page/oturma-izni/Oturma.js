import React from 'react';
import HouseIcon from '@material-ui/icons/House';
import Altheader from '../../altheader/Altheader';

export default function Oturma() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Oturma İzni"
                 alttitle="Oturma İzni"
                 icon={<HouseIcon style={{fontSize:"35px"}}/>}
            />
            <h1>OTURMA İZNİ</h1>
        </div>
    )
}
