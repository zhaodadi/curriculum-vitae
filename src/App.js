import React, { Component } from 'react';
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
