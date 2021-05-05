/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from '@material-ui/icons/Phone';

import TurFlag from "./turkish.ico";
import Menu from "./components/turkish/menu/Menu";
import Footer from "./components/turkish/footer/Footer";
import Home from "./components/turkish/home-page/Home";
import About from "./components/turkish/about-page/About";
import Services from "./components/turkish/services-page/Service";
import Reference from "./components/turkish/references-page/Reference";
import Blog from "./components/turkish/blog/Blog";
import Contact from "./components/turkish/contact-page/Contact";
import Notfound from "./components/turkish/notfound/Notfound";
import Turk from "./components/turkish/services-page/turk-vatandasligi/Turk";
import Admin from "./components/turkish/admin/Admin";
import Egitim from "./components/turkish/investment/turkiyede-egitim/Egitim";
import TurkSaglik from "./components/turkish/investment/turkiyede-saglik/TurkSaglik";
import Yasam from "./components/turkish/investment/turkiyede-yasam/Yasam";
import Yatirim from "./components/turkish/investment/turkiyede-yatirim/Yatirim";
import AltBlog from "./components/turkish/blog/Altblog";
import ServicePage from "./components/turkish/services-page/ServicePage";
import CalismaIzni from "./components/turkish/sabit-hizmet/calisma-izni/Calisma";
import OturmaIzni from "./components/turkish/sabit-hizmet/oturma-izni/Oturma";
import TurkVatandaslik from "./components/turkish/sabit-hizmet/turk-vatandaslik/TurkVatandaslik";

import EngFlag from "./ukflag.ico";
import EngMenu from "./components/english/menu/Menu";
import EngFooter from "./components/english/footer/Footer";
import EngHome from "./components/english/home-page/Home";
import EngAbout from "./components/english/about-page/About";
import EngServices from "./components/english/services-page/Service";
import EngReference from "./components/english/references-page/Reference";
import EngBlog from "./components/english/blog/Blog";
import EngContact from "./components/english/contact-page/Contact";
import EngNotfound from "./components/english/notfound/Notfound";
import EngTurk from "./components/english/services-page/turk-vatandasligi/Turk";
import EngAdmin from "./components/english/admin/Admin";
import EngEgitim from "./components/english/investment/turkiyede-egitim/Egitim";
import EngTurkSaglik from "./components/english/investment/turkiyede-saglik/TurkSaglik";
import EngYasam from "./components/english/investment/turkiyede-yasam/Yasam";
import EngYatirim from "./components/english/investment/turkiyede-yatirim/Yatirim";
import EngAltBlog from "./components/english/blog/Altblog";
import EngServicePage from "./components/english/services-page/ServicePage";
import EngWorking from "./components/english/static-service/working-permit/WorkingPermit";
import EngResidence from "./components/english/static-service/residence-permit/ResidencePermit";
import EngTurkishCit from "./components/english/static-service/turkish-citizenship/TurkishCitizenship";

function App() {
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);

const [hizmetler, setHizmetlerimiz] = useState([]);
const [bloks, setBloks] = useState([]);
  
  useEffect(() => {
    // fires once when the app loads

    db.collection("services")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setHizmetlerimiz(
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

    db.collection("blogs")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setBloks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            heading: doc.data().heading,
            content: doc.data().blog_content,
          }))
        );
      });

      db.collection("enServices")
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

    db.collection("enBlogs")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            heading: doc.data().heading,
            content: doc.data().blog_content,
          }))
        );
      });

    console.log(services);
  }, []);

  const [state, setState] = useState(true);
  const handleChange = () => {
    setState(!state);
    if (state) {
      db.collection("services")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setHizmetlerimiz(
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

      db.collection("blogs")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setBloks(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().heading,
              content: doc.data().blog_content,
            }))
          );
        });
    } else {
      db.collection("enServices")
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

      db.collection("enBlogs")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setBlogs(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().heading,
              content: doc.data().blog_content,
            }))
          );
        });
    }
  };
  return (
    <BrowserRouter>
      <div className="app">
        <br />
        <div
          className="row languageOption"
          style={{
            position: "fixed",
            top: "0",
            width: "105%",
            height: "5rem",
            backgroundColor: "white",
            padding: "1%",
            paddingLeft: "5rem",
            overflow: "hidden",
          }}
        >
          {state === true ? (
            <Link to="/eng">
              <label onClick={handleChange} style={{ color: "black" }}>
                <img
                  src={EngFlag}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                ></img>{" "}
                &nbsp;English
              </label>
            </Link>
          ) : (
            <Link to="/">
              <label onClick={handleChange} style={{ color: "black" }}>
                <img
                  src={TurFlag}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                ></img>{" "}
                &nbsp;Türkçe
              </label>
            </Link>
          )}
        </div>
        {state === true ? (
          document.title = "Nar Göç ve Danışmanlık",
          <div
            id="menu"
            className="col-lg-2 col-md-2 col-sm-12"
            style={{ margin: "0px", padding: "0px", marginTop: "3rem" }}
          >
            <Menu />
          </div>
        ) : (
          document.title = "Nar Law and Consultancy",
          <div
            id="engmenu"
            className="col-lg-2 col-md-2 col-sm-12"
            style={{ margin: "0px", padding: "0px", marginTop: "3rem" }}
          >
            <EngMenu />
          </div>
        )}

        <div
          className="col-lg-10 col-md-10 col-sm-12"
          id="app-container"
          style={{ margin: "0px", padding: "0px" }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hakkimizda" component={About} />
            <Route exact path="/hizmetlerimiz" component={Services} />
            <Route exact path="/referanslarimiz" component={Reference} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/iletisim" component={Contact} />
            <Route exact path="/turk-vatandasligi" component={Turk} />
            <Route exact path="/turkiyede-egitim" component={Egitim} />
            <Route exact path="/turkiyede-saglik" component={TurkSaglik} />
            <Route exact path="/turkiyede-yasam" component={Yasam} />
            <Route exact path="/turkiyede-yatirim" component={Yatirim} />

            <Route
              exact
              path="/türkiyede-calisma-izni"
              component={CalismaIzni}
            />
            <Route exact path="/türkiyede-oturma-izni" component={OturmaIzni} />
            <Route
              exact
              path="/türk-vatandasligi-talebi"
              component={TurkVatandaslik}
            />

            {hizmetler.map((service, index) => (
              <Route
                exact
                path={"/hizmetlerimiz/" + service.heading}
                component={ServicePage}
              />
            ))}

            {bloks.map((blog, index) => (
              <Route
                exact
                path={"/blogs/" + blog.heading}
                component={AltBlog}
              />
            ))}

            <Route exact path="/admin" component={Admin} />

            <Route exact path="/eng" component={EngHome} />
            <Route exact path="/about-us" component={EngAbout} />
            <Route exact path="/services" component={EngServices} />
            <Route exact path="/references" component={EngReference} />
            <Route exact path="/en-blog" component={EngBlog} />
            <Route exact path="/contact" component={EngContact} />
            <Route exact path="/turkish-citizenship" component={EngTurk} />
            <Route exact path="/education-in-turkey" component={EngEgitim} />
            <Route exact path="/health-in-turkey" component={EngTurkSaglik} />
            <Route exact path="/life-in-turkey" component={EngYasam} />
            <Route exact path="/investment-in-turkey" component={EngYatirim} />

            <Route
              exact
              path="/residence-permit-in-turkey"
              component={EngResidence}
            />
            <Route
              exact
              path="/working-permit-in-turkey"
              component={EngWorking}
            />
            <Route
              exact
              path="/turkish-citizenship-request"
              component={EngTurkishCit}
            />

            {services.map((service, index) => (
              <Route
                exact
                path={"/services/" + service.heading}
                component={EngServicePage}
              />
            ))}

            {blogs.map((blog, index) => (
              <Route
                exact
                path={"/eng-blogs/" + blog.heading}
                component={EngAltBlog}
              />
            ))}

            <Route exact path="/eng-admin" component={EngAdmin} />
            <Route component={EngNotfound} />
            <Route component={Notfound} />
          </Switch>
          <div
            id="footer"
            className="col-12 mx-0 px-0"
            style={{ width: "100%", backgroundColor: "#f8f9fa" }}
          >
            {state === true ? <Footer /> : <EngFooter />}
          </div>
        </div>
        <div className="roof-phone">
                <a
                    href="tel: +905432286396"
                    className="phone_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneIcon className="phone-icon"/>
                </a>
            </div>
            <div className="roof-whatsapp">
                <a
                    href="https://wa.me/+905432286396"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="whatsapp-icon"/>   
                </a>
            </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
