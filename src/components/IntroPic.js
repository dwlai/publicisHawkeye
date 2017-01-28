import React from 'react'

export default class IntroPic extends React.Component{
	
	render(){
		return (
				<div className={this.props.className} style={{backgroundImage: 'url(' + this.props.image + ')'}}>
					<img className={this.props.className2} src={this.props.image2} />
				</div>
		);
	}

	}