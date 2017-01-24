import React from 'react'
import IntroPic from './IntroPic'
import IntroLink from './IntroLink'
import IntroContent from './IntroContent'

export default class Intro extends React.Component{
	
	constructor(){
			super();
			this.state = {
						title: "WE CREATE RELATIONSHIP MOMENTS",
						content: "From grand gestures to “just because”, every moment matters in defining a relationship – whether in our personal lives or in business. It’s these moments that we seize on. It’s these moments that make anyone feel special, heard, and compelled to take immediate action. And together, it’s these moments that ultimately determine how your relationship grows. ",
						image:"./assets/img/introImage.png"
			};
	}
	
	changeContent(){
		this.setState({	title: "NEW CONTENT",
						content :"Heres some new content",
						image: "./assets/img/hi.png"
						});
	}
	
	render(){
		return (
				<div id ="introSection" className="container-fluid">
					<div className="row">
						<IntroPic image={this.state.image} />
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<ul>
								<IntroLink changeContent= {this.changeContent.bind(this)} title={["OUR",<br/>, "DIFFERENCE"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} title={["OUR",<br/>, "CAPABILITIES"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} title={["OUR",<br/>, "APPROACH"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} title={["OUR",<br/>, "DATA"]}/>
							</ul>
							<IntroContent title={this.state.title} content={this.state.content} />
						</div>
					</div>
				</div>
		);
	}

	}
