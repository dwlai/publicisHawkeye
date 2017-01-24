import React from 'react'
import IntroPic from './IntroPic'
import Navlink from './Navlink'
import AboutContent from './AboutContent'

export default class Intro extends React.Component{
	
	render(){
		return (
				<div id ="intro" className="container-fluid">
					<div className="row">
						<IntroPic image="./assets/img/introImage.png" />
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<ul>
								<Navlink title={["OUR",<br/>, "DIFFERENCE"]}/>
								<Navlink title={["OUR",<br/>, "CAPABILITIES"]}/>
								<Navlink title={["OUR",<br/>, "APPROACH"]}/>
								<Navlink title={["OUR",<br/>, "DATA"]}/>
							</ul>
							<AboutContent title="WE CREATE RELATIONSHIP MOMENTS" content="From grand gestures to “just because”, every moment matters in defining a relationship – whether in our personal lives or in business. It’s these moments that we seize on. It’s these moments that make anyone feel special, heard, and compelled to take immediate action. And together, it’s these moments that ultimately determine how your relationship grows. " />
						</div>
					</div>
				</div>
		);
	}

	}
