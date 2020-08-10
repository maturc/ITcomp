import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/"          exact component={Home} />
          <Route path="/about"     exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog"      exact component={Blog} />
          <Route path="/contact"   exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
