import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import Altheader from '../../altheader/Altheader'

export default function Calisma() {
    return (
        <div>
            <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Çalışma İzni"
                 alttitle="Çalışma İzni"
                 icon={<WorkIcon style={{fontSize:"35px"}}/>}
            />
            <h1>ÇALIŞMA İZNİ</h1>
        </div>
    )
}
