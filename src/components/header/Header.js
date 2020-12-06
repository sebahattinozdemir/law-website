import "./Header.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const {subtitle,title,icon}=this.props;
    return (
        <div class="row p-4" style={{ backgroundColor: "#A4203A",paddingTop:"5rem",width:"100%",paddingLeft:"5rem",height:"20rem",marginLeft:"0px"}}>
          <div className="col-12">
          
                <div className="genel">

                    <Link className="ana1" to="/" >
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

               
                <p className="title"><b>
                    {icon}
                    &nbsp;
                    {title}</b></p>    
                      
          </div> 
        </div>
    

    
    )
    } 

}

