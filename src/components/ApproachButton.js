import React from 'react';

export default class ApproachButton extends React.Component{
	
	handleClick(){
		
		this.props.rotateVector();
		
	}
	
	render(){
		return(
			<div className="approachButton btn btn-primary" onClick={this.handleClick.bind(this)}>Read More</div>
		);
		
	}
	
}