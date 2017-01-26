import React from 'react';

export default class TeamLink extends React.Component{
	
	render(){
		return(
				<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					<li style={this.props.style}>
						<h3><em>{this.props.name}</em></h3>
						<p>{this.props.title}</p>
					</li>
				</div>
			);
			
	}
	
}