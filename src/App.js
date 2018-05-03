import React, { Component } from 'react';
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;
