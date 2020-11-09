import "./Interior.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { Component } from 'react'
export default class Interior extends Component {
    render(){
        const {photo,title,uzanti,divert}=this.props;
    return (
       
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{float:"left",paddingBottom:"1%"}}>
                        <img src={photo} className="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                        <a className="h_title" href={uzanti}>{title}</a>
                        <br/>
                        <a className="add" href={divert}>Daha Fazla Bilgi </a><ArrowForwardIcon style={{color:"orange"}}/>
                       
                  
          </div>
        
    )
    } 
}
