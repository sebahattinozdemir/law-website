import "./App.css";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home-page/Home";
import About from "./components/about-page/About";
import Services from "./components/services-page/Service";
import Reference from "./components/references-page/Reference";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact-page/Contact";
import Notfound from "./components/notfound/Notfound";
import Calisma from "./components/services-page/calisma-izni/Calisma";
import Oturma from "./components/services-page/oturma-izni/Oturma";
import Saglik from "./components/services-page/saglik-sigorta-policesi/Saglik";
import Turk from "./components/services-page/turk-vatandasligi/Turk";
import Admin from "./components/admin/Admin";
import Turkiye from "./components/services-page/turkiyede-sirket-kurulusu/Turkiye";
import Turkuaz from "./components/services-page/turkuaz-kart/Turkuaz";
import Egitim from "./components/investment/turkiyede-egitim/Egitim";
import TurkSaglik from "./components/investment/turkiyede-saglik/TurkSaglik";
import Yasam from "./components/investment/turkiyede-yasam/Yasam";
import Yatirim from "./components/investment/turkiyede-yatirim/Yatirim";
import AltBlog from "./components/blog/Altblog";

import React, { useState, useEffect } from "react";
import db from "./firebase";
import ServicePage from "./components/services-page/ServicePage";



function App() {
  const [services, setServices] = useState([]);

  const [heading, setHeading] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const [underServiceText1, setUnderServiceText1] = useState("");
  const [underServiceText2, setUnderServiceText2] = useState("");
  const [underServiceText3, setUnderServiceText3] = useState("");
  const [underServiceHead1, setUnderServiceHead1] = useState("");
  const [underServiceHead2, setUnderServiceHead2] = useState("");
  const [underServiceHead3, setUnderServiceHead3] = useState("");
  useEffect(() => {
    // fires once when the app loads
    db.collection("services")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            heading: doc.data().heading,
            serviceContent: doc.data().service_content,
            underServiceHead1: doc.data().under_service_head1,
            underServiceHead2: doc.data().under_service_head2,
            underServiceHead3: doc.data().under_service_head3,
            underServiceText1: doc.data().under_service_text1,
            underServiceText2: doc.data().under_service_text2,
            underServiceText3: doc.data().under_service_text3,
          }))
        );
      });
    console.log(services);
  }, []);

 

 
  return (
    
    <Router>
      
      <div className="app">
        <div id="menu"
          className="col-lg-2 col-md-2 col-sm-12" style={{margin:'0px',padding:'0px'}}>
          <Menu />
        </div>
        
        <div
          className="col-lg-10 col-md-10 col-sm-12" id= 'app-container'
          style={{margin:'0px',padding:'0px'}}
        >
          <Switch>

            
            <Route exact path="/" component={Home} />
            <Route exact path="/hakkimizda" component={About} />
            <Route exact path="/hizmetlerimiz" component={Services} />
            <Route exact path="/referanslarimiz" component={Reference} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/iletisim" component={Contact} />
            <Route exact path="/turk-vatandasligi" component={Turk} />
            {services.map((service,index) => (
            <Route exact path={"/hizmetlerimiz/"+service.heading} component={ServicePage} />
          ))}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/turkiyede-egitim" component={Egitim} />
            <Route exact path="/turkiyede-saglik" component={TurkSaglik} />
            <Route exact path="/turkiyede-yasam" component={Yasam} />
            <Route exact path="/turkiyede-yatirim" component={Yatirim} />
            <Route exact path="/altblog" component={AltBlog} />
            <Route component={Notfound} />
            
            
          </Switch>
          <div id="footer" className="col-12 mx-0 px-0"  style={{width:'100%',backgroundColor: "#f8f9fa"}}> 
            <Footer />
          </div>
          

        </div>
      </div>
    </Router>
    
  );
}

export default App;
