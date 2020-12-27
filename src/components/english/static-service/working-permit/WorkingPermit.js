import React from 'react';
import "./WorkingPermit.css";
import WorkIcon from '@material-ui/icons/Work';
import Header from "../../header/Header"; 

export default function WorkingPermit() {
    return (
        <div>
           <Header
                subtitle="Working Permit in Turkey"
                title="Working Permit in Turkey"
                icon={<WorkIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">You must obtain a work permit before starting work as a foreigner living in Turkey. However, if you have been granted refugee or subsidiary protection status, you can work as dependent or independent from the date you received that status. Work permit is issued by the Ministry of Family, Labor and Social Services. The application can be made in two ways, from domestic and abroad. Both domestic and international applications can be applied to a workplace or business.
is done through.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Work Permits for Turkey</h3>
                           <p class="card-text1">Republic of Turkey and the country you are going to come to Turkey in order to work must apply by going to foreign missions. Do not forget when you go to work for the purpose of Representatives to consult the workplace or enterprise agreement with you that you need to submit work in Turkey. After you apply you will be given a reference number will be forwarded to the office or business you work in Turkey and will be required to make an application on your behalf. After this step, the office or business will be able to apply on your behalf through the online system.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Work Permit Application Methods</h3>
                           <p class="card-text1">If you are resident in our country as a resident, you have a valid residence permit for at least 6 months, if you are an international protection applicant, 6 months after the application, if you are a conditional refugee or temporary protection holder, you will gain the right to apply for a work permit after 6 months. If you meet the term requirement, the workplace or business you will work in will be able to apply on your behalf through the online system. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Business Start-Up in Turkey</h3>
                           <p class="card-text1" >Turkey, the world is one of the countries attracting the attention of investors in general and successful fast-growing economy. Young and occurs with a dynamic population, qualified and competitive workforce, young population of over 30 million, transportation, thanks to its central location with advanced infrastructure in the telecommunications and energy sectors attracting foreign investors quickly to him Turkey, the world's leading economies
between. In our country, where there are more than 50 thousand foreign companies and over 12 billion dollars of direct investments are made, you can invest in the same conditions and rights as Turkish citizens.</p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
