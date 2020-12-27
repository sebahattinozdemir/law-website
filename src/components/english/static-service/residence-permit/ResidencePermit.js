import React from 'react';
import "./ResidencePermit.css";
import HouseIcon from '@material-ui/icons/House';
import Header from "../../header/Header"; 

export default function ResidencePermit() {
    return (
        <div>
           <Header
                subtitle="Residence Permit in Turkey"
                title="Residence Permit in Turkey"
                icon={<HouseIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">The person who will receive a residence permit application on which Turkey is important that you do with this purpose. In 2016, according to Immigration Department data most residence permit in Turkey, the countries have been Iraq. Then, Syria and Azerbaijan countries follow Iraq. a total of 6 for the method for obtaining a residence permit Turkey is located. These methods appear as “Short Term Residence Permit, Family Residence Permit, Student Residence Permit, Long Term Residence Permit, Humanitarian Residence Permit, Humanitarian Residence Permit”. You can continue reading our article to learn about these permissions and to learn about the necessary documents.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><HouseIcon style={{fontSize:"x-large",color:"black"}}/> Short Term Residence Permit</h3>
                            <p class="card-text1">Short periods of residence permit will need to be determined within the scope of the reasons for coming to Turkey. Some of these conditions are as follows;</p>
                            <ol className="sermaye">
                                <li>Those who come for research purposes,</li>
                                <li>Those who own immovable property,</li>
                                <li>They will do business or establish connections,</li>
                                <li>Those aiming for tourism,</li>
                                <li>Those who have transferred from family residence permit to short-term residence permit.</li>
                            </ol>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><HouseIcon style={{fontSize:"x-large",color:"black"}}/> Family Residence Permit</h3>
                            <p class="card-text1">The residence permit includes the requirement of marriage in order to get a family residence permit. foreign nationals who are married to a citizen of the Republic of Turkey and the Republic of Turkey on people can have a residence permit. Foreign persons who are nationals of Turkish citizens, even if the child is not married can register their children to Turkey for a residence permit.</p>
                           
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><HouseIcon style={{fontSize:"x-large",color:"black"}}/> Student Residence Permit</h3>
                            <p class="card-text1" >The name is kind of residence permit as a student to receive those who came to Turkey implies. In case of acquisition or school enrollment made on Turkey, at the latest within 2 months after coming to Turkey it must be made of the residence registration. Otherwise, people may experience major problems regarding residence permits. Residence permits for students cannot be longer than their education period.</p>
                    </div>

                 
                  
                   
             

       </div>
        </div>
    )
}
