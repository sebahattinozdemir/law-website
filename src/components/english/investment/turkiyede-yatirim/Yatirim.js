import React from 'react';
import "./Yatirim.css";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Header from "../../header/Header"; 

export default function Yatirim() {
    return (
        <div>
           <Header
                subtitle="Investment in Turkey"
                title="Investment in Turkey"
                icon={<LocalAtmIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
            <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Turkey's economy, registering a record growth in 2003, 2003 and 2018, while among the world's 18th largest economy rose to 13 in 2018 as well. Leaving behind their opponents of Turkey's growth momentum is expected to continue in the coming years. Fiscal discipline remains bound to Turkey in 2002, the ratio of public debt to national income, which was 70% in 2018, has managed to drop below the 30% level. Watching the positive effect of stringent fiscal discipline, Turkey's budget balance is reflected in a reduced format in the last 16 years, the difference is clear.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalAtmIcon style={{fontSize:"x-large",color:"black"}}/> Strategic Location</h3>
                           <p class="card-text1">​​​​​​​​​​​​​​​​​​​​​​​​​​​Turkey, East-West position is both effective and cost-effective center for major markets are seeing a natural bridge between the North-South axis. Turkey, Europe within 4 hour flight radius, the Middle East and North Africa region, and a total population of 1.5 billion in Central Asia and offers easy access to a market worth US $ 24 trillion. Turkey's strategic location, from Tokyo to New It offers easy access to markets in 16 different time zones up to York, and Turkish Airlines flies to 255 destinations in 122 countries. Multinational corporations are increasingly producing, as a center for export and management prefers to Turkey.
                           </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalAtmIcon style={{fontSize:"x-large",color:"black"}}/> Qualified and Affordable Workforce</h3>
                           <p class="card-text1">Turkey, 32.7 million people constitutes Europe's third largest labor pool with the labor force. Young population in Turkey has, in the country as the most important factor in the growth of the labor force has contributed to getting top position compared to competitors. Turkey also has realized the highest growth in the labor force compared to EU countries. A large rapidly growing young population and a large work force by universities to raise the number of university graduates in the country in Turkey is to ensure the conversion of skilled labor.
                        </p>
                        <ul className="card-list">
                                <li>Over 6.7 million students in higher education,</li>
                                <li>Approximately 800,000 graduates per year from universities,</li>
                                <li>World-class engineering education.</li>

​
                        </ul>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><LocalAtmIcon style={{fontSize:"x-large",color:"black"}}/> Advantageous R&amp;D Ecosystem</h3>
                           <p class="card-text1" >The Turkish government aims to increase the share of R&amp;D investments in the total public budget to 2%. This share, which exceeded 1% as of 2018, is expected to reach 2% in the next few years. extensive R&amp;D incentives in Turkey, well-educated and skilled workforce is supported by many global companies that operate in the market and competitive cost advantages. All of these elements come together, provide a dynamic ecosystem to occur in Turkey. Today, more than 100 leading global companies, the competitive R&amp;D incentives in Turkey and benefit from ecosystem.​</p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
