import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/"          exact component={Home} />
          <Route path="/about"     exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
