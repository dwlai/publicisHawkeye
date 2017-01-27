import React from 'react';

export default class ApproachButton extends React.Component{
	
	handleClick(){
		
		this.props.changeSubcontent();
		
	}
	
	render(){
		return(
			<div className="approachButton" onClick={this.handleClick.bind(this)}></div>
		);
		
	}
	
}