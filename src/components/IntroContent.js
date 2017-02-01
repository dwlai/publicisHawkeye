import React from 'react'

export default class IntroContent extends React.Component{
	
	render(){
		return (
				
				<div className="introContent">
						<h3 className="headline"> <em>{this.props.title}</em></h3>
						<p className="copy"> {this.props.content} </p>
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