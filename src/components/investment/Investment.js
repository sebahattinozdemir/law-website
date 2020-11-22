import "./Investment.css";
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Investment extends Component {
    render(){
        const {Iphoto,Ititle,Iuzanti,Iexplain}=this.props;
    return (
       
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{float:"left",paddingBottom:"1%",backgroundColor:"#F2F2F2"}}>
                        
                        <img src={Iphoto} className="card" alt="..." style={{width:"100%", height:"25rem",paddingTop:"2%"}}></img>
                        
                        <Link className="Ih_title" to={Iuzanti} >
                       
                            {Ititle}
                        </Link>
                        <br/>

                        <p>{Iexplain}</p>
                    
          </div>
        
    )
    } 
}
