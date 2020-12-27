import React from 'react';
import "./TurkSaglik.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Header from "../../header/Header"; 

export default function TurkSaglik() {
    return (
        <div>
           <Header
                subtitle="Health in Turkey"
                title="Health in Turkey"
                icon={<LocalHospitalIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                                   
                    
          
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Health services in Turkey is quite wide opportunities and has a complex structure. If you are a private health insurance holder or a general health insurance holder, you can benefit from health services according to the scope of your insurance, if you are not insured, you can benefit from health services for a fee. To be eligible you must register first effective health services to the Provincial Directorate of Migration and Administration must know that given the scope of which depends on your current health status in Turkey. Turkish health system; emergency health services consist of primary, secondary and tertiary health care centers.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> Emergency Health Services</h3>
                           <p class="card-text1">Emergency health services include healthcare services provided to people in emergencies such as accidents, injuries, sudden health problems.
Ambulance Services: Medical assistance that you can reach by calling 112 in case of an emergency. When you call 112, you need to give information such as the location of the emergency, the number of patients or injured. 112 authorities can ask additional questions to provide you with the right healthcare service, and it is vital that you answer the questions of the authorities accurately and completely. Hospital Emergency Services: 24-hour service within hospitals
emergency services. You should only apply to these services in the presence of an emergency. In general, first medical response and welcome service is provided in emergency services.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> Health Insurance System</h3>
                           <p class="card-text1">You buy insurance to benefit from effective health care system will benefit as long as you live in Turkey. If you take out private health insurance, you can get service according to the scope of your insurance policy. Private health insurance is determined by many insurance companies with different scopes and different fees. In order to choose the most suitable insurance for you, it will be useful to consult with insurance agents and do detailed research. General health insurance, on the other hand, is the insurance provided by the social security provincial directorates, that is, by the public authority. To take out general health insurance
1 year residency requirement to be sought in Turkey. But they can make universal health insurance if they are in demand within three months from the date of their first registration, regardless of the school year residency requirement for foreign students studying in Turkey. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> General Health Insurance Coverage</h3>
                           <p class="card-text1" >When you are included in the general health insurance system, you, your spouse and your children who have not completed the age of 18 can benefit from the health service. However, your children who have not completed the age of 20 if they have high school or equivalent education or candidate apprenticeship and apprenticeship training and vocational training in businesses, your children who have not completed the age of 25 if they have higher education and your unmarried children who are found to be disabled, and your mother and father can also benefit from health services. . The expiry of the general health insurance person's residence permit, insured in a foreign country
being considered as a general health insurance holder within another scope, death and absence.</p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
