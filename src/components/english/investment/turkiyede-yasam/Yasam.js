import React from 'react';
import "./Yasam.css";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Header from "../../header/Header"; 

export default function Yasam() {
    return (
        <div>
           <Header
                subtitle="Life in Turkey"
                title="Life in Turkey"
                icon={<EmojiPeopleIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                        <p class="card-text1">The place where a person lives with the intention of staying permanently is called a house. everyone's address is registered to a settlement system is compulsory in Turkey. According to the Constitution, the house is inviolable and anyone's home cannot be entered without their permission. Those who stay under International Protection and Temporary Protection can only reside in the provinces determined by the Directorate General of Migration Management due to their status. If you do not comply with this rule, your enjoyment of the rights and services provided to you will be severely restricted.</p>
                           
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> Home Search for Rent</h3>
                           <p class="card-text1">Living in a beautiful and affordable home is almost everyone's dream, but realizing this dream requires extensive research. Before the research, you must determine the criteria you will search for in a home. Do not forget that the location and age of the house you are going to live in are important factors that determine the rental price. When you rent a house through a real estate agent, you must pay the consultant a service fee. The service fee is collected as 10% + VAT (18%) of the one-year rental fee, for once from the tenant, regardless of the contract term. If you rent your house directly from the property owner as a result of internet or street searches, you do not need to pay any fees. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> Purchasing a House</h3>
                           <p class="card-text1">T.C. to E-Government Ministry of Labor and Social Security out yapabiliyorlar.eg apply online foreign nationals were monitored over a different method or residence permit for Turkey. The foreigner to work must have an official residence address in the country of origin. The country with its official residence address must apply to the relevant Turkish Embassy or consulate. Both types of applications are made online for foreign nationals. In order not to be defrauded when buying a house, the ownership of the house in question and any mortgage on it, etc. You can check whether there are any restrictions from the Land Registry and Cadastre Provincial Directorates or Land Registry Directorates. immovable property in Turkey (houses, land, shops, etc.) is only sales made in the Land Registry Office where the immovable concerned. After reaching an agreement with the property owner regarding the immovable property you want to buy, apply to the Land Registry Directorates for the sale.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> Tenant's Rights and Obligations</h3>
                           <p class="card-text1" ></p>
                           <ul className="card-list">
                                <li>After the rental agreement is made, the house is your private space. The landlord cannot enter the house without your permission. However, regarding the maintenance and repair of the house, you can enter with your permission at a time that will be agreed with you in advance.</li>
                                <li>You are obliged to deliver the house in the same way you bought it.</li>
                                <li>Your deposit will be delivered to you when you leave the house. However, the damages you have caused to the house may be deducted from the deposit. If your loss is more than the deposit amount, you are also obliged to cover the missing amount.</li>
                                <li>You must pay the lease on the date and form you specified in the contract.</li>
                                <li>Your landlord cannot evict you from the house unless justified throughout the tenancy agreement.</li>

​
                        </ul>

                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
