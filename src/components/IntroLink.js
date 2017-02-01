import React from 'react';

export default class IntroLink extends React.Component{
	
	handleClick(){
		this.props.changeContent(this.props.item);
		
	}
	
	render(){
		return(
			<li  className="col-xs-3" onClick={this.handleClick.bind(this)}><a href={this.props.section}>{this.props.title}</a></li>
		);
	}
}