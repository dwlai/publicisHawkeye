import React from 'react';
import $ from 'jquery';

export default class IntroPic extends React.Component{
	
	render(){
		
				$('.approach').css({
						"transition":"0s",
						"transform":"rotate(0deg)"
					});
		
		return (
				<div className={this.props.className} data-count={this.props.count}>
					<img className={this.props.className2} src={this.props.image2} />
				</div>
		);
	}

	}