import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NoMatch from './pages/NoMatch/NoMatch';
import { NavigationBar } from './components/navigationBar/NavigationBar';
import { Banner } from './components/banner/Banner';
import Footer from './components/footer/Footer';

function App() {
  return (  
      <div>
      <NavigationBar />
      <Banner />
      <div className='wrap'>
        <div className='main'>
          <Router>
              <Switch>         
                <Route exact  path='/' component={Home}/>
                <Route exact  path='/about' component={About}/>
                <Route exact  path='/contact' component={Contact}/>
                <Route exact  component={NoMatch}/>
              </Switch>
          </Router>   
        </div>
      </div>
      <Footer />
      </div>        
  );
}

export default App;
