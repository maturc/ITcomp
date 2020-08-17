import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Traffic from './components/portfolio/Traffic';
import Chat from './components/portfolio/Chat';
import Mobile from './components/portfolio/Mobile';
import Galery from './components/portfolio/Galery';
import News from './components/portfolio/News';
import Server from './components/portfolio/Server';
import Banking from './components/portfolio/Banking';
import Ecomerce from './components/portfolio/Ecomerce';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/"          exact component={Home} />
          <Route path="/about"     exact component={About} />

          <Route path="/portfolio"           exact component={Portfolio} />
          <Route path="/portfolio/traffic"   exact component={Traffic} />
          <Route path="/portfolio/mobile"    exact component={Mobile} />
          <Route path="/portfolio/server"    exact component={Server} />
          <Route path="/portfolio/galery"    exact component={Galery} />
          <Route path="/portfolio/chat"      exact component={Chat} />
          <Route path="/portfolio/news"      exact component={News} />
          <Route path="/portfolio/banking"   exact component={Banking} />
          <Route path="/portfolio/e-comerce"   exact component={Ecomerce} />

          <Route path="/contact"   exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
