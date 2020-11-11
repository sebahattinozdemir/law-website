import "./Interior.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Interior extends Component {
    render(){
        const {photo,title,uzanti,divert}=this.props;
    return (
       
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{float:"left",paddingBottom:"1%"}}>
                        <img src={photo} className="card_int" alt="..." style={{width:"100%", height:"auto"}}></img>
                        
                        <Link className="h_title" to={uzanti} >
                       
                            {title}
                        </Link>
                        <br/>

                        <Link className="an" to={divert} >
                        <ArrowForwardIcon style={{color:"orange"}}/>
                            Daha Fazla Bilgi
                        </Link>
                    
          </div>
        
    )
    } 
}
