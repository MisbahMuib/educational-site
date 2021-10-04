import './App.css';
import Headers from './components/Headers/Headers';
import "tailwindcss/tailwind.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Ssc from './components/Ssc/Ssc';
import Hsc from './components/Hsc/Hsc';
import Services from './components/Services/Services';
import Bcs from './components/Bcs/Bcs';
import English from './components/English/English';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/hsc">
            <Hsc></Hsc>
          </Route>
          <Route exact path="/our-services">
            <Services></Services>
          </Route>
          <Route path="/bcs">
            <Bcs></Bcs>
          </Route>
          <Route exact path="/ssc">
            <Ssc></Ssc>
          </Route>
          <Route path="/english-spoken-courses">
            <English></English>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>




        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
