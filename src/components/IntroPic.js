import React from 'react'

export default class IntroPic extends React.Component{
	
	render(){
		return (
				<div className="col-xs-0 col-sm-6 col-md-6 col-lg-6">
					<img className="introPic" src={this.props.image} />
				</div>
		);
	}

	}