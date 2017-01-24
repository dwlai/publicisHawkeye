import React from 'react';

export default class Navlink extends React.Component{
	render(){
		return(
			<li><a href={this.props.section}>{this.props.title}</a></li>
		);
	}
}