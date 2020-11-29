import "./App.css";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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


function App() {
  return (
    
    <Router>
      
      <div className="app">
        <div id="menu"
          className="col-lg-2 col-md-2 col-sm-12" style={{margin:'0px',padding:'0px'}}>
          <Menu />
        </div>
        
        <div
          className="col-lg-10 col-md-10 col-sm-12" id="menu"
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
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/hizmetlerimiz/calisma-izni" component={Calisma} />
            <Route exact path="/hizmetlerimiz/oturma-izni" component={Oturma} />
            <Route exact path="/hizmetlerimiz/saglik-sigorta-policesi" component={Saglik} />
            <Route exact path="/hizmetlerimiz/turk-vatandasligi" component={Turk} />
            <Route exact path="/hizmetlerimiz/turkiyede-sirket-kurulusu" component={Turkiye} />
            <Route exact path="/hizmetlerimiz/turkuaz-kart" component={Turkuaz} />
            <Route exact path="/turkiyede-egitim" component={Egitim} />
            <Route exact path="/turkiyede-saglik" component={TurkSaglik} />
            <Route exact path="/turkiyede-yasam" component={Yasam} />
            <Route exact path="/turkiyede-yatirim" component={Yatirim} />
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
