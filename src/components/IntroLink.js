import React from 'react';

export default class IntroLink extends React.Component{
	
	handleClick(){
		this.props.changeContent(this.props.item);
		
	}
	
	render(){
		return(
			<li onClick={this.handleClick.bind(this)}><a className={this.props.className} href={this.props.section}>{this.props.title}</a></li>
		);
	}
}