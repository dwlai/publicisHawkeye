import React from 'react'
import IntroPic from './IntroPic'
import Navlink from './Navlink'
import AboutContent from './AboutContent'

export default class Intro extends React.Component{
	
	render(){
		return (
				<div id ="intro" className="container-fluid">
					<div className="row">
						<IntroPic />
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<ul>
								<Navlink title={["OUR",<br/>, "DIFFERENCE"]}/>
								<Navlink title={["OUR",<br/>, "CAPABILITIES"]}/>
								<Navlink title={["OUR",<br/>, "APPROACH"]}/>
								<Navlink title={["OUR",<br/>, "DATA"]}/>
							</ul>
							<AboutContent />
						</div>
					</div>
				</div>
		);
	}

	}
