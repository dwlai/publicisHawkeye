import React from 'react';

export default class TeamLink extends React.Component{
	
	render(){
		return(
				<div className="team-individual col-sm-2">
					<div style={this.props.style}>
						<h4><em>{this.props.name}</em></h4>
						<p>{this.props.title}</p>
					</div>
				</div>
			);
			
	}
	
}