import "./RefComponent.css";
import React, { Component } from 'react'


export default class RefComponent extends Component {
    render(){
        const {refphoto,refname,refjob}=this.props;
    return (
       
          <div className="col-md-6 col-sm-6 col-12" style={{float:"left",paddingBottom:"1%"}}>
                        <img src={"https://drive.google.com/uc?export=view&id="+refphoto}  className="refphoto" alt="..."></img>
                        <p className="refname">{refname}</p>
                        <p className="refjob">{refjob}</p>
          </div>
        
    )
    } 
}
