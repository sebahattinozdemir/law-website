import Header from "../header/Header";
import Neden from "./neden/Neden"; 
import Misyon from "./misyon/Misyon";
import Basic from "./basic/Basic";
import BusinessIcon from '@material-ui/icons/Business';
import React, { useState, useEffect } from "react";
import "./About.css";
import db from "../../firebase";


function About() {

    const [about,setAbout] = useState([]);
    const [main, setMain] = useState("");
    const [side, setSide] = useState("");
    const [vision, setVision] = useState("");
    const [mission, setMission] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
        db.collection("about").onSnapshot((snapshot) => {
          setMain(snapshot.docs.map((doc) => doc.data().main_content));
          setSide(snapshot.docs.map((doc) => doc.data().side_content));
          setVision(snapshot.docs.map((doc) => doc.data().vision));
          setMission(snapshot.docs.map((doc) => doc.data().mission));
          setId(snapshot.docs.map(doc =>({id:doc.id})))
        });
      }, []);
    return (
        <div >
            <Header
                subtitle="Hakkımızda"
                title="Hakkımızda"
                icon={<BusinessIcon style={{fontSize:"35px"}}/>}
                
            />
            <div className="row" style={{margin:"0%"}}>
                <Basic content = {main} />
                <Neden/>
                <Misyon/>
            </div>
            
           
            
            
            
        </div>
    )
}

export default About
