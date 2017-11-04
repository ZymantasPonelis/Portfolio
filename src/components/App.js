import React, { Component } from 'react';

import './App.css';
import Header from './Header/Header';
import About from './About/About';
import ProjectsList from './Projects/ProjectsList';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <ProjectsList />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
