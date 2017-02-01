import React from 'react';
import IntroPic from './IntroPic';
import IntroContent from './IntroContent';
import ApproachButton from './ApproachButton';
import $ from 'jquery';

export default class Intro extends React.Component{
	
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
			$labels.removeClass("active");
			$intelligence.removeClass("rotate1");
			$intelligence.addClass("active");
			$action.addClass("rotate3");
			$relevance.addClass("rotate1");
			$relevance.removeClass("rotate3");

		}
		else if (rotateState == 2)  //data-count = 3
		{
			$labels.removeClass("active");
			$relevance.addClass("active");
			$relevance.removeClass("rotate1");
			$intelligence.addClass("rotate3");
			$action.addClass("rotate1");
			$action.removeClass("rotate3");
		}
		else if (rotateState == 0) //data-count = 1
		{
			$labels.removeClass("active");
			$action.addClass("active");
			$action.removeClass("rotate1");
			$intelligence.addClass("rotate1");
			$intelligence.removeClass("rotate3");
			$relevance.addClass("rotate3");
			
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
						
	render(){
		return (

				// <section id="introSection">
					<div className="introComponent container-fluid">
						<div className="row ">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<IntroPic  
									image2={this.props.image2} 
									className={this.props.className} 
									className2={this.props.className2}
									count={1}/>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<IntroContent title={this.props.title} content={this.props.content} />
							<ApproachButton rotateVector={this.rotateVector.bind(this)}/>
						</div>
					</div>
					</div>
				// </section>

				
					
	

		);
	}

	}
