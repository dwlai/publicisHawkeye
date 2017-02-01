import React from 'react'

export default class IntroContent extends React.Component{
	
	render(){
		return (
				
				<div className="introContent">
						<h1 className="headline"> <em>{this.props.title}</em></h1>
						<p className="copy"> {this.props.content} </p>
				<div className="subContent">
					<div className="subIntelligence">
						<h2 className = "subhead">Intelligence</h2>
						<p className="subCopy">We transform data into a more robust understanding of when, why, and how consumers act. </p>
					</div>
					<div className="subRelevance">
						<h2 className = "subhead">Relevance</h2>
						<p className="subCopy">Our deep understanding of the consumer inspires us to craft compelling storytelling and purposeful design for timely, targeted messages that resonate loudly with your audience.</p>
					</div>
					<div className="subAction">
						<h2 className = "subhead">Action</h2>
						<p className="subCopy">Action drives reaction. We focus on creative ideas that get measurable and actionable results, continuously testing and optimizing, and building towards the next success.</p>
					</div>
				</div>
				</div>
		);
	}

	}