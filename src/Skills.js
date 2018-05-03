import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (  
   		<div className="col-six tab-full">  
				<h3>Skills</h3>
				<p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

				<ul className="skill-bars">
						<li>
						<div className="progress percent90"><span>90%</span></div>
						<strong>HTML5</strong>
						</li>
						<li>
						<div className="progress percent85"><span>85%</span></div>
						<strong>CSS3</strong>
						</li>
						<li>
						<div className="progress percent70"><span>70%</span></div>
						<strong>JQuery</strong>
						</li>
						<li>
						<div className="progress percent95"><span>95%</span></div>
						<strong>PHP</strong>
						</li>
						<li>

						<div className="progress percent75"><span>75%</span></div>
						<strong>Wordpress</strong>
						</li>
				</ul>
			</div>
    );
  }
}

export default Skills;
