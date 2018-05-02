import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (    
        <section id="intro">   

			<div className="intro-overlay"></div>	

			<div className="intro-content">
				<div className="row">

					<div className="col-twelve">

						<h5>Hello, World.</h5>
						<h1>I'm Juan Dela Cruz.</h1>

						<p className="intro-position">
							<span>Front-end Developer</span>
							<span>UI/UX Designer</span> 
						</p>

						<a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

					</div>  
					
				</div>   		 		
			</div>   	

		</section>
    );
  }
}

export default Intro;
