import React, { Component } from 'react';
import Profile from "./Profile";
import Skills from "./Skills";

class About extends Component {
  render() {
    return (   
			 <section id="about">  
				<div className="row section-intro">
					<div className="col-twelve">

						<h5>About</h5>
						<h1>Let me introduce myself.</h1>

						<div className="intro-info">

							<img src="images/profile-pic.jpg" alt="Profile Picture" />

							<p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
						</div>   			

					</div>   		
				</div> 
				
				<div className="row about-content">
					<Profile />
					<Skills />
				</div>
		 	</section>

    );
  }
}

export default About;
