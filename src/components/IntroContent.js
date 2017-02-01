import React from 'react'

export default class IntroContent extends React.Component{
	
	render(){
		return (
				<div className="introContent">
					<h1 className="headline"> <em>{this.props.title}</em></h1>
					<p className="copy"> {this.props.content} </p>	
				</div>
		);
	}

	}