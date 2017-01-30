import React from 'react';
import IntroPic from './IntroPic';
import IntroLink from './IntroLink';
import IntroContent from './IntroContent';
import IntroStore from '../stores/IntroStore';
import ApproachButton from './ApproachButton';
import $ from 'jquery';

export default class Intro extends React.Component{
	
	constructor(){
			super();
			this.state = {
						intro: IntroStore.getContent(0),
						/*counter:0*/
			};
	}
	
	changeContent(item){
		this.setState({	
						intro: IntroStore.getContent(item)
						});
						
		}
		
			
	rotateVector(){
	
		//cache dom
		var $vector = $('.approach');
		var $labels = $vector.find("p");
		var $intelligence = $vector.find(".intelligence");
		var $relevance = $vector.find(".relevance");
		var $action = $vector.find(".action");
		var count = $vector.attr("data-count");
		var degrees = 120 * count;
		var ndegrees = degrees * -1;
		var rotateState = count % 3;
		
		if (rotateState == 1)    //data-count = 2
		{
			$intelligence.css({
				"top":"-56px",
				"left":"152px"
			
			});
			$labels.removeClass("active");
			$intelligence.addClass("active");
		}
		else if (rotateState == 2)  //data-count = 3
		{
				$intelligence.css({
				"top":"-92px",
				"left":"130px"
			});
			
			$labels.removeClass("active");
			$relevance.addClass("active");
		}
		else if (rotateState == 0) //data-count = 1
		{
				$intelligence.css({	
				"top":"-42px",
				"left":"184px"
			});
			$labels.removeClass("active");
			$action.addClass("active");
			
		}
	
		//render
		$vector.css({
						"transition":"2s",
						"transform":"rotate("+degrees+"deg)"
					});
		$labels.css({
						"transition":"2s",
						"transform":"rotate("+ndegrees+"deg)"
					});
					
		count++;
		$vector.attr("data-count",count);
	
	}
						
	/*changeSubcontent(){
		
		var newState = this.state;
		newState.counter++;
		newState.intro.content = IntroStore.getsubContent(newState.counter);
		
		
		this.setState(newState);
		if (newState.counter == 3)
		{newState.counter = 0;}
	}*/
	
	
	render(){
						
		return (
				<div id ="introSection" className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<IntroPic  
									image2={this.state.intro.image2} 
									className={this.state.intro.className} 
									className2={this.state.intro.className2}
									count={1}/>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<ul>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'0'} title={["OUR",<br/>, "DIFFERENCE"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'1'} title={["OUR",<br/>, "CAPABILITIES"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'2'} title={["OUR",<br/>, "APPROACH"]}/>
								<IntroLink changeContent= {this.changeContent.bind(this)} item = {'3'} title={["OUR",<br/>, "DATA"]}/>
							</ul>
							<IntroContent title={this.state.intro.title} content={this.state.intro.content} />
							<ApproachButton rotateVector={this.rotateVector.bind(this)}/>
						</div>
					</div>
				</div>
		);
	}

	}
