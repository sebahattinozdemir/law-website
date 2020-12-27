import React from 'react';
import "./TurkishCitizenship.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import Header from "../../header/Header"; 

export default function TurkishCitizenship() {
    return (
        <div>
           <Header
                subtitle="Turkish Citizenship Request"
                title="Turkish Citizenship Request"
                icon={<StarRateIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                   
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">An alien who wishes to acquire Turkish citizenship law in case of transport conditions specified by the decision of the Ministry of Turkey citizenship can win our citizenship.

If you become a Turkish citizen with the decision of the competent authority, there will be no change in the citizenship status of your spouse. The children to whom one of the parents has the right of custody on the date of acquisition of citizenship acquires Turkish citizenship upon the consent of the other spouse. If the other parent does not consent, proceedings are made according to the decision of the judge at the place of residence of one of the parents. Children of parents who acquire Turkish citizenship together will also acquire citizenship. The provisions of the article on the general acquisition of Turkish citizenship are applied to the children of the parents who are not treated together with them, if they apply to acquire Turkish citizenship after maturity.

Carrying the required conditions does not provide an absolute right to people to acquire Turkish citizenship.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Acquisition of Turkish Citizenship Exceptionally</h3>
                            <p class="card-text1">Provided that it does not pose any danger in terms of national security and public order, the following foreigners can acquire Turkish citizenship with the proposal of the Ministry and the decision of the Council of Ministers.


                                
                           </p>
                           <ol className="sermaye">
                                <li>Thereby providing Turkey with industrial plants, economic, social, sporting, cultural, scientific, technological and artistic fields exceptional service said sooner or later will be considered and relevant ministries foreigners made in reasoned proposals in the law,</li>
                                <li>Foreigners who have a residence permit pursuant to the Foreigners and International Protection Law No.6458 and Turquoise Card holders, their foreign spouse, and their minor or dependent children,</li>
                                <li>Foreigners who are deemed necessary to naturalize</li>
                               
                            </ol>
                            <p class="card-text1">The requests of those who are in obstacle in terms of national security and public order are rejected by the Ministry. The procedures for applying for exceptional citizenship and acquiring Turkish citizenship accordingly are carried out by the Ministry of Interior.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Becoming a Turkish Citizen Through Marriage</h3>
                            <p class="card-text1">A foreigner who marries a Turkish citizen cannot be a Turkish citizen directly. For this, he must be married to a Turkish citizen for at least 3 years and his marriage must continue. Foreigners who meet these conditions can apply to acquire Turkish citizenship.
In the applicants;</p>
                            <ol className="sermaye">
                                <li>The condition of living in family unity,</li>
                                <li>The condition of not engaging in an activity incompatible with the marital union,</li>
                                <li>It is required that there should not be a situation that may pose a danger to national security and public order.</li>
                               
                            </ol>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Blue Card</h3>
                            <p class="card-text1" >Blue Card is issued by our foreign representative offices abroad and by the Provincial Directorates of Population and Citizenship in the country, upon request, for persons who are Turkish citizens by birth but later lose their Turkish citizenship by obtaining permission to leave, and their children who are processed together. Blue card holders have the same rights as Turkish citizens if they do not pose any threat to security and public order. However, blue card holders have no military obligation, nor the right to elect and be elected / enter public office and import vehicles or household items. If the persons in question have acquired rights regarding social security, they are kept and can be used in accordance with the provisions of the laws.</p>
                    </div> 
                 
                  
                   
             

       </div>
        </div>
    )
}
