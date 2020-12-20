import "./Misyon.css";
import mission from "./target.ico";
import vision from "./vision.ico";
import React, { Component } from 'react'

export default class Misyon extends Component {
    render() {
        return (
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
                   <br/>
                   <div className="col-md-6 col-sm-6 col-12">
                        <h3 style={{marginLeft:"1%"}}><img src={mission} alt="..."></img> Our Mission</h3>
                        <p class="card-vizyon">To be a consultancy office that prioritizes client and client security in all the services we offer, produces respectful, competent, qualified service and constantly renews itself, serving with client-client focused and trust-based dynamics. 
                        </p>
                        <ol className="ilkeler">
                            <li>To increase the quality of life of the individuals we serve,</li>
                            <li>To contribute to the economic, social and environmental development of the city, region and country in which we operate.</li>
                        </ol>
                        <br/>
                   </div>
                
                   <div className="col-md-6 col-sm-6 col-12">
                        <h3 style={{marginLeft:"1%"}}><img src={vision} alt="..."></img> Our Vision</h3>
                        <p class="card-vizyon"> Within the framework of the principles stated below, it is the sole purpose of our office to seek professional solutions to the problems faced by our clients and clients, with our experience and knowledge, and to ensure that the disputes are resolved in the fastest and the shortest time.</p>
                        <ol className="ilkeler">
                            <li>Quality service production,</li>
                            <li>Professional expertise,</li>
                            <li>Technology investment that catches the latest,</li>
                            <li>Privacy in personal data,</li>
                            <li>Respect for people,</li>
                            <li>Ability to take effective and fast steps,</li>
                            <li>To have social responsibility awareness.</li>
                        </ol>

                        <br/>
                   </div>
                  
                   
                  
                   
                  
                   
                   
             
                   
            </div>
        )
    }
}
