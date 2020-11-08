import "./Header.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const {subtitle,title,icon}=this.props;
    return (
        <div class="row p-4" style={{ backgroundColor: "orange",paddingTop:"50px",width:"100%",paddingLeft:"25px",height:"200px",marginLeft:"0px"}}>
          <div className="col-12">
          
                <div className="genel">

                    <Link className="ana" to="/" >
                            Ana Sayfa
                            
                    </Link>
                    
                        
                    <p className="subtitle">
                            &nbsp;
                            <ArrowForwardIcon/>
                            &nbsp; 
                        {subtitle}</p>
                </div>
                    <br/>
                    <br/>
                    <br/>

                <p className="icon" >{icon}</p> 
                <p className="title"><b>
                    &nbsp;
                    

                    {title}</b></p>
                
                    
                
                
               
                
          </div>
              
          
        
        </div>
    

    
    )
    } 

}

