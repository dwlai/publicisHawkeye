import React from 'react';
import IntroPic from './IntroPic';
import IntroContent from './IntroContent';
import ApproachButton from './ApproachButton';
import $ from 'jquery';

export default class Intro extends React.Component{
	
	rotateVector(){
	
		//cache dom
		var $introComponent = $('.introComponent');
		var $introContent= $introComponent.find('.introContent');
		var $copy = $introContent.find('.copy');
		var $vector = $introComponent.find('.approach');
		var $subIntelligence=$('.subIntelligence');
		var $subRelevance=$('.subRelevance');
		var $subAction=$('.subAction');
		var $labels = $vector.find(".labels");
		var $intelligence = $vector.find(".intelligence");
		var $relevance = $vector.find(".relevance");
		var $action = $vector.find(".action");
		var count = $vector.attr("data-count");
		var degrees = 120 * count;
		var ndegrees = degrees * -1;
		var rotateState = count % 3;
		var $subContent = $introComponent.find('.subContent');
		
		//$copy.addClass('hide');
		$subContent.find('div').removeClass('active');
		$labels.removeClass("active");
		
		
		
		if (rotateState == 1)    //data-count = 2
		{
			
			$intelligence.removeClass("rotate1");
			$intelligence.addClass("active");
			$action.addClass("rotate3");
			$relevance.addClass("rotate1");
			$relevance.removeClass("rotate3");
			
			$subIntelligence.addClass("active");

		}
		else if (rotateState == 2)  //data-count = 3
		{
		
			$relevance.addClass("active");
			$relevance.removeClass("rotate1");
			$intelligence.addClass("rotate3");
			$action.addClass("rotate1");
			$action.removeClass("rotate3");
			$subRelevance.addClass("active");
		}
		else if (rotateState == 0) //data-count = 1
		{
		
			$action.addClass("active");
			$action.removeClass("rotate1");
			$intelligence.addClass("rotate1");
			$intelligence.removeClass("rotate3");
			$relevance.addClass("rotate3");
			$subAction.addClass("active");
			
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

	componentDidMount(){

		var $introLinks = $('.introLinks li a');
		$introLinks.removeClass();
		$introLinks[this.props.id].className = "active";

	}

	render(){

		return (

				// <section id="introSection">
					<div className={"introComponent container-fluid " + this.props.className0}>
						<div className="row">
							<div className="col-sm-6">
								<IntroPic  
										image2={this.props.image2} 
										className={this.props.className} 
										className2={this.props.className2}
										count={1}/>
							</div>
							<div className="col-sm-5">
								<IntroContent title={this.props.title} content={this.props.content} />
								<ApproachButton rotateVector={this.rotateVector.bind(this)}/>
							</div>
						</div>
					</div>
				// </section>

				
					
	

		);
	}

	}
