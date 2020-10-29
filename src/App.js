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



function App() {
  return (
    <Router>
      <div className="col-12">
        <div
          className="col-lg-3 col-md-3 col-sm-12"
          
        >
          <Menu />
        </div>

        <div
          className="col-lg-9 col-md-9 col-sm-12" 
         
        >
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hakkimizda" component={About}/>
            <Route exact path="/hizmetlerimiz" component={Services}/>
            <Route exact path="/referanslarimiz" component={Reference}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/iletisim" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
