import React from 'react'

export default class IntroContent extends React.Component{
	
	render(){
		return (
				<div>
					<h1> <em>{this.props.title}</em></h1>
					<p> {this.props.content} </p>
				</div>
		);
	}

	}