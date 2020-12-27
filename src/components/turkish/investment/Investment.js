import "./Investment.css";
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Investment extends Component {
    render(){
        const {Iphoto,Ititle,Iuzanti,Iexplain}=this.props;
    return (
       
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{float:"left",paddingTop:"1%",backgroundColor:"#F2F2F2",height:"41rem"}}>
                        
                        <img src={Iphoto} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%"}}></img>
                        
                        <Link className="Ih_title" to={Iuzanti} style={{paddingLeft:"1%",fontSize:"large"}} >
                       
                            {Ititle}
                        </Link>
                        <br/>

                        <p style={{padding:"1%",textAlign:"justify"}}>{Iexplain}</p>
                    
          </div>
        
    )
    } 
}
