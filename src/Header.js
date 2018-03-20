import React, { Component } from 'react';
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
        <header>   	
   	        <div className="row">
   		        <div className="top-bar">
                   <a className="menu-toggle" href="#"><span>Menu</span></a>

                   <div className="logo">
                       <a href="index.html">Dadi Zhao</a>
                   </div>		

                   <Nav /> 

   		        </div>
            </div>	
        </header>
    );
  }
}

export default Header;
