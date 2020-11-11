import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Altheader from '../../altheader/Altheader'

export default function Turkuaz() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Turkuaz Kart"
                 alttitle="Turkuaz Kart"
                 icon={<AssignmentIndIcon style={{fontSize:"35px"}}/>}
            />
            <h1>TURKUAZ KART</h1>
        </div>
    )
}

