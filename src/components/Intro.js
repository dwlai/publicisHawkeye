import React from 'react'
import IntroPic from './IntroPic'
import IntroLink from './IntroLink'
import IntroContent from './IntroContent'
import IntroStore from '../stores/IntroStore'

export default class Intro extends React.Component{
	
	constructor(){
			super();
			this.state = {
						intro: IntroStore.getContent(0)
			};
	}
	
	changeContent(item){
		this.setState({	
						intro: IntroStore.getContent(item)
						});
	}
	
	render(){
		return (
				<div id ="introSection" className="container-fluid">
					<div className="row">
						<IntroPic image={this.state.intro.image} />
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<ul>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'0'} title={["OUR",<br/>, "DIFFERENCE"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'1'} title={["OUR",<br/>, "CAPABILITIES"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'2'} title={["OUR",<br/>, "APPROACH"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'3'} title={["OUR",<br/>, "DATA"]}/>
							</ul>
							<IntroContent title={this.state.intro.title} content={this.state.intro.content} />
						</div>
					</div>
				</div>
		);
	}

	}
