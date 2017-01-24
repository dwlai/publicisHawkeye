import React from 'react';

export default class IntroLink extends React.Component{
	
	handleClick(){
		this.props.changeContent();
	}
	
	render(){
		return(
			<li onClick={this.handleClick.bind(this)} ><a href={this.props.section}>{this.props.title}</a></li>
		);
	}
}