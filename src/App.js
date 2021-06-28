import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
