import React from 'react';
import $ from 'jquery';

export default class IntroPic extends React.Component{







	componentDidMount(){

		if(this.props.className == 'brain'){

			var $images = $('.brain .cycle');
			var timeout = 0;

			function fadeIn($image){
				$image.animate({opacity : "1"},1500, function(){fadeOut($image);});
			}

			function fadeOut($image){
				$image.animate({opacity : "0"},1500);
			}


			function initAnimate($img){
			$img.each(function(){

				setTimeout(function(){fadeIn($(this));}.bind(this),timeout);
				timeout = timeout + 1500;
				});
				
				setTimeout(function(){initAnimate($img)}.bind(this),0);
			}

			initAnimate($images);
		}

	}
	
	render(){
		
		var $approach = $('.approach');
		var $labels = $approach.find("p");
		
		$approach.add($labels).css({
				"transition":"0s",
				"transform":"rotate(0deg)"
		});
		
		$labels.removeClass("active");
									
		$approach.attr("data-count", 1);



		
		return (
				<div className="imgContainer">
					<div className={this.props.className} data-count={this.props.count}>
						<p className="brainHeading">And this is where we do it all.</p>
						<img className="img-responsive brainSpacer" src={"./assets/img/capabilities/space.png"} />
						<img className={"img-responsive cycle " + this.props.className2} src={this.props.image2} />
						<img className="img-responsive aquisition cycle" src={"./assets/img/capabilities/brain-02-aquisition.png"} />
						<img className="img-responsive upsell cycle" src={"./assets/img/capabilities/brain-03-upsell.png"} />
						<img className="img-responsive crosssell cycle" src={"./assets/img/capabilities/brain-04-crosssell.png"} />
						<img className="img-responsive demand cycle" src={"./assets/img/capabilities/brain-05-demand.png"} />
						<img className="img-responsive retention cycle" src={"./assets/img/capabilities/brain-06-retention.png"} />
						{/*<p className="intelligence labels" ><em>Intelligence</em></p>*/}
						{/*<p className="action labels"><em>Action</em></p>*/}
						{/*<p className="relevance labels" ><em>Relevance</em></p>*/}
						
						<p className="brainCopy">Like our imaginations,<br/> our expertise spans far and wide.</p>
					</div>
				</div>
				
				
		);
	}

	}