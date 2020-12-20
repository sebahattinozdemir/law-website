import "./Neden.css";

import SecurityIcon from '@material-ui/icons/Security';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import React, { Component } from 'react'

export default class Neden extends Component {
    render() {
        
        return (
            <div className="row" style={{margin:"0%",padding:"1%",backgroundColor:"#EFEFEF"}}>
                   <h3 style={{color:"#A4203A",marginLeft:"1%"}}>Why Nar Immigration and Consultancy Office</h3>
                   <br/>
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><SecurityIcon style={{color:"#A4203A",fontSize:"larger"}}/>&nbsp; Reliability</p>
                        <p class="card-neden"> 
                        In business and trade relations, the priority is reliability. People want to trust the person they will do business with first. Therefore, the basis of Nar Consultancy Office is "trust".</p>
                        <br/>
                   </div>
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><DirectionsRunIcon style={{color:"#A4203A",fontSize:"larger"}}/>&nbsp; Easy and Quick Steps</p>
                        <p class="card-neden"> Our main goal is always to make the lives of our clients and clients easier. By focusing on the right points, we keep you away from complex structures, difficult and annoying processes.</p>
                        <br/>
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><HowToRegIcon style={{color:"#A4203A",fontSize:"larger"}}/>&nbsp; Be Respectful</p>
                        <p class="card-neden"> Being respectful to our clients and clients is our main priority. Position, title, age, gender or any other difference is not a distinctive feature for us. Regardless of the situation, we always stand for respect and courtesy in a professional manner.</p>
                        <br/>
                   </div>
                   
             
                   
            </div>
            
               
            
                
           
        )
    }
}
