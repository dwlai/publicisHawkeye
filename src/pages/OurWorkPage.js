import React from 'react';
import { Link } from 'react-router';
import WorkPageStore from '../stores/WorkPageStore';

export default class OurWorkPage extends React.Component{
	
		
	render(){
			
		var article = WorkPageStore.getContent(this.props.params.article)[0];	
		return(
				<div className="ourWorkPage">
					<div className="container-fluid">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<p>OUR WORK</p>
							<Link className="back" to="/">"BACK"</Link>
							<h1>{article.headline}</h1>
							<h2>{article.subhead}</h2>
							<p> <span>Intelligence:</span> {article.intelligence}</p>
							<p> <span>Relevance:</span> {article.relevance}</p>
							<p> <span>Action:</span> {article.action}</p>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<img src={article.image} alt={article.title} />
						</div>
					</div>
				</div>
			);
	}
}