import React from 'react';
import { Link } from 'react-router';
import WorkPageStore from '../stores/WorkPageStore';

export default class OurWorkPage extends React.Component{
	
	
		
	render(){
	
		var article = WorkPageStore.getContent(this.props.params.article)[0];	
		var divStyle = { backgroundImage: 'url(' + article.image + ')' };

		return(
				<div id="ourWorkPage">
					<div className="container-fluid block -white edge--both--reverse">

						{/*<div className="container-inner">*/}
							<div className="row is-flex">
						
								<div className="col-sm-5 col-sm-offset-1">

									<div className="row">
										<div className="col-xs-6">
											<h2 className="block-title">OUR WORK</h2>
										</div>
										<div className="col-xs-6">
											<h2 className="block-title back pull-right"><Link to="/">{"< BACK"}</Link></h2>
										</div>
									</div>

									<div className="row">
										<div className="col-sm-12">
											<h3>{article.headline}</h3>
											<h4>{article.subhead}</h4>
											<p> <span className="text-red">Intelligence:</span> {article.intelligence}</p>
											<p> <span className="text-red">Relevance:</span> {article.relevance}</p>
											<p> <span className="text-red">Action:</span> {article.action}</p>
										</div>
									</div>
								</div>
								<div className="col-sm-6 img-div-wrap">
									{/*<div className="img-div" style={divStyle}></div>*/}
									<img src={article.image} alt={article.title} className="img-responsive" />
								</div>

							</div>
						{/*</div>*/}
					</div>
				</div>
			);
	}
}