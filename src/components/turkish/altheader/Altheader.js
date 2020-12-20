import "./Altheader.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Altheader extends Component {
    render(){
        const {alttitle,title,icon}=this.props;
    return (
        <div class="row p-4" style={{ backgroundColor: "#A4203A",paddingTop:"3rem",width:"100%",paddingLeft:"5rem",height:"15rem",marginLeft:"0px",marginTop:"-2rem"}}>
          <div className="col-12">
         
                <div className="genel">

                    <Link className="ana2" to="/" >
                            Ana Sayfa
                            
                    </Link>
                    
                    <Link className="subtitle1" to="/hizmetlerimiz">
                            &nbsp;
                            <ArrowForwardIcon/>
                            &nbsp; 
                            Hizmetlerimiz
                    </Link>   
                    <p className="alttitle">
                            &nbsp;
                            <ArrowForwardIcon/>
                            &nbsp; 
                            {alttitle}
                    </p>
                </div>
                    
                    <br/>
                    <br/>

                
                <p className="title"><b>
                    {icon} 
                    &nbsp;
                    {title}</b></p>
                
                
          </div>
              
          
        
        </div>
    

    
    )
    } 

}

