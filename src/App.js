import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Footer from './footer/footer'
import Home from './pages/home/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
