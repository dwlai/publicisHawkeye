import React from 'react';
import $ from 'jquery';

export default class IntroPic extends React.Component{
	
	render(){
		
		var $approach = $('.approach');
		var $labels = $approach.find("p");
		var $intelligence = $approach.find(".intelligence")
		
		$approach.add($labels).css({
				"transition":"0s",
				"transform":"rotate(0deg)"
		});
		
		$labels.removeClass("active");
									
		$approach.attr("data-count", 1);
		
		return (
				<div className="imgContainer">
					<div className={this.props.className} data-count={this.props.count}>
						<img className={this.props.className2} src={this.props.image2} />
						<p className="intelligence labels" ><em>Intelligence</em></p>
						<p className="action labels"><em>Action</em></p>
						<p className="relevance labels" ><em>Relevance</em></p>
						<p className="brainHeading">And this is where we do it all.</p>
						<p className="brainCopy">Like our imaginations,<br/> our expertise spans far and wide.</p>
					</div>
				</div>
				
				
		);
	}

	}