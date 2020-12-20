import "./Home.css";
import video from "./1.gif";
import Anıtkabir from "./anıtkabir.gif";
import investment from "./investment.jpg";
import education from "./education.jpg";
import life from "./life.jpg";
import health from "./health.jpg";
import working from "./calisma.jpg";
import residence from "./oturma.jpg";
import turkish from "./turkishcitizenship.jpg";
import Mail from "../mail/Mail";
import Interior from "../services-interior/Interior";
import Investment from "../investment/Investment";
import StaticService from "../static-service/StaticService";
import React, { useEffect } from 'react';



function Home() {


  return (
    <div className="row">
      <div
        className="col-12 slide"
        style={{ position: "relative", marginLeft:'1%',marginRight:'1%',marginTop:"-2rem" }}
      >

        <img
          src={Anıtkabir}
          class="card-img-top"
          alt="..."
          style={{ width: "100%", height: "20vw"}}
        ></img>

        <p
          style={{
            position: "absolute",
            top: "5%",
            left: "15%",
            color: "white",
            fontSize:"xx-large"
            
          }}
        >
          YOU SHOULD CHOOSE US FOR QUICKER AND SAFER STEPS....
        </p>
      </div>
      <div className="row" style={{margin:"0%",padding:"1%"}}>
            <StaticService
                Sphoto={working}
                Stitle="Working Permit in Turkey"
                Suzanti="/working-permit-in-turkey"
                Sexplain="Foreigners in Turkey working principles of International Law No. 6735 regulates all of your questions about the study by the labor laws and regulations permit this page you can find the answer."
            />
            <StaticService
                Sphoto={residence}
                Stitle="Residence Permit in Turkey"
                Suzanti="/residence-permit-in-turkey"
                Sexplain="The kinds of residence permit for foreigners in Turkey, application methods and applications of how everything about living with the permission to do a detailed video explanation that we're telling."
            />
          <StaticService
                Sphoto={turkish}
                Stitle="Turkish Citizenship"
                Suzanti="/turkish-citizenship-request"
                Sexplain="Turkish citizenship through investment (home area of citizenship to foreigners from Turkey) You can find all the details and the scope of our consulting services in 2018 a new program here."
                
            />
           
          
      </div>
     
      <div className="row" style={{margin:"0%",padding:"1%"}}>
            <Investment
                Iphoto={investment}
                Ititle="Investment in Turkey"
                Iuzanti="/investment-in-turkey"
                Iexplain="Turkey is the second fastest growing country in the world by the year 2017 and everything is an investment tool in Turkey, where we teach and how we invest to this page."
            />
            <Investment
                Iphoto={life}
                Ititle="Life in Turkey"
                Iuzanti="/life-in-turkey"
                Iexplain="How should you act for a peaceful life in Turkey, what are the traditions and customs of the country in which you are a guest, the Turks do not like what like what we have prepared a guide that you allocate your bedside"
            />
            <Investment
                Iphoto={health}
                Ititle="Health in Turkey"
                Iuzanti="/health-in-turkey"
                Iexplain="Geography largest city hospitals, private hospitals and has made a reputation all over the world have written here is everything you need to know about health care and treatment by qualified doctors in Turkey."
            />
            <Investment
                Iphoto={education}
                Ititle="Education in Turkey"
                Iuzanti="/education-in-turkey"
                Iexplain="Which is a paradise for foreign students are given training in how schools in Turkey which, enrollment stage, student residence permits, finding a job after graduation process in a detailed way we teach."
            />
      </div>
            
            <Mail />
            
    </div>
  );
}

export default Home;

