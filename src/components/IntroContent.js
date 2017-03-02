import React from 'react'
import $ from 'jquery'

export default class IntroContent extends React.Component{



	moreContent(){

		var $elements = $('.subheadDataContainer, .arrow');
		if($elements.hasClass('active')){
			$elements.removeClass('active');
		}
		else
		$elements.addClass('active');
		
	}
	
	render(){
		return (
				
				<div className="introContent">
						<h3 className="headline"> <em>{this.props.title}</em></h3>
						<div className="subheadData">
							<div className="subheadDataContainer">
								<h4 className = "subhead">Connecting the right message to the right person at the right time - in real time.</h4>
								<p>It’s the place where we start, continue, and keep countless conversations alive across all channels relevant to our clients, their customers, and their best prospects.</p>
								<p>It’s our relentless commitment to iterative testing, learning, and scaling at a pace that embraces the speed and diversity of the customer journey.</p>
								<p>It’s the engine that drives our Relationship Moments.</p>
								<p>EIP enables and empowers brands to listen, analyze, and make informed decisions to engage customers in a more seamless and effective way.</p>
								<p>Working behind the scenes, our agile, always-on hub combines inferred and declared data collected from all touchpoints and interactions with the brand.</p>
								<p>It builds a customer profile that continuously evolves with their behaviors to create the perfect cross-channel experiences. </p>
							</div>
							<div><img onClick={this.moreContent.bind(this)} className="arrow" src="./assets/img/arrow.png"/></div>
						</div>
						<p className="copy"> {this.props.content} </p>
						<ul className="capabilitiesContent">
							<li>>  CRM</li>
							<li>>  Direct & Digital Marketing</li>
							<li>>  Loyalty Marketing</li>
							<li>>  Customer & Data Ingelligence</li>
							<li>>  Customer & Data Analytics</li>
							<li>>  Print & Digital Production</li>
							<li>>  Database Management</li>
							<li>>  Marketing Automation</li>
						</ul>
				<div className="subContent">
					<div className="subIntelligence">
						<h4 className = "subhead">Intelligence</h4>
						<p className="subCopy">We transform data into a more robust understanding of when, why, and how consumers act. </p>
					</div>
					<div className="subRelevance">
						<h4 className = "subhead">Relevance</h4>
						<p className="subCopy">Our deep understanding of the consumer inspires us to craft compelling storytelling and purposeful design for timely, targeted messages that resonate loudly with your audience.</p>
					</div>
					<div className="subAction">
						<h4 className = "subhead">Action</h4>
						<p className="subCopy">Action drives reaction. We focus on creative ideas that get measurable and actionable results, continuously testing and optimizing, and building towards the next success.</p>
					</div>
				</div>
				</div>
		);
	}

	}