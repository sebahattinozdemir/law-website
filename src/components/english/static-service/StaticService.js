import "./StaticService.css";
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class StaticService extends Component {
    render(){
        const {Sphoto,Stitle,Suzanti,Sexplain}=this.props;
    return (
       
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{float:"left",paddingTop:"1%",height:"35rem"}}>
                        
                        <img src={Sphoto} className="card" alt="..." style={{width:"100%", height:"20rem",padding:"1%"}}></img>
                        
                        <Link className="Sh_title" to={Suzanti} style={{paddingLeft:"1%"}} >
                       
                            {Stitle}
                        </Link>
                        <br/>

                        <p style={{padding:"1%",textAlign:"justify"}}>{Sexplain}</p>
                    
          </div>
        
    )
    } 
}
