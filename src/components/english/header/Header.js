import "./Header.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const {subtitle,title,icon}=this.props;
    return (
        <div class="row p-4" style={{ backgroundColor: "#A4203A",paddingTop:"3rem",width:"100%",paddingLeft:"5rem",height:"15rem",marginLeft:"0px",marginTop:"-2rem"}}>
          <div className="col-12">
          
                <div className="genel">

                    <Link className="ana1" to="/eng" >
                            Home Page
                            
                    </Link>
                    
                        
                    <p className="subtitle">
                            &nbsp;
                            <ArrowForwardIcon/>
                            &nbsp; 
                        {subtitle}</p>
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

