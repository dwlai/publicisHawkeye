import React from 'react';

export default class TeamLink extends React.Component{
	
	render(){
		return(
				<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					<li style={this.props.style}><a href="">Some Guy</a></li>
				</div>
			);
			
	}
	
}