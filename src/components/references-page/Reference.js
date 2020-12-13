import Header from "../header/Header"; 
import berati from "./berati.jpg";
import sami from "./sami.jpg";
import mehmet from "./mehmet.jpg";
import hasan from "./hasan.jpg";
import eda from "./eda.jpg";
import tugba from "./tugba.jpg";
import GroupIcon from '@material-ui/icons/Group';
import RefComponent from "../Reference-compo/RefComponent";
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
                <br/>
                <div className="quality" style={{padding:"1%",width:"90%",backgroundColor:"#EFEFEF",borderRadius:"1rem",margin:"auto"}}>
                        <p style={{fontSize:"larger",fontStyle:"normal"}}>Bir memlekette, namuslular, namussuzlar kadar cesur olmadıkça, o memlekette kurtuluş yoktur.</p>
                </div>
                <br/>
                <div className="row" style={{padding:"1%",width:"90%",backgroundColor:"#EFEFEF",borderRadius:"1rem",margin:"auto"}}>
                   

                  <RefComponent
                        refphoto={eda}
                        refname="Eda Merdamert"
                        refjob="Mechanical Engineer"
                  />
                  <RefComponent
                        refphoto={tugba}
                        refname="Tuğba Dikmen"
                        refjob="Electrical and Electronics Engineer"
                  />
                  <RefComponent
                        refphoto={berati}
                        refname="Berati Şahin"
                        refjob="Software Developer"
                  />
                  <RefComponent
                        refphoto={hasan}
                        refname="Hasan Hüseyin Yılmaz"
                        refjob="Lawyer"
                  />
                  <RefComponent
                        refphoto={sami}
                        refname="Sami Oğuz"
                        refjob="Doctor"
                  />
                  <RefComponent
                        refphoto={mehmet}
                        refname="Mehmet Cebeci"
                        refjob="Attorney"
                  />
                </div>
                <br/>

        </div>
    )
}

export default Reference
