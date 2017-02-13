import React from 'react';

export default class Navlink extends React.Component{

	handleClick(event){

		this.props.scrollToSection(event.target.getAttribute('data'));
	}



	render(){
		return(
			<li><a onClick={this.handleClick.bind(this)} data={this.props.section}>{this.props.title}</a></li>
		);
	}
}