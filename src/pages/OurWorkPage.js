import React from 'react';
import { Link } from 'react-router';
import WorkPageStore from '../stores/WorkPageStore';

export default class OurWorkPage extends React.Component{
	
	constructor(){
		super()
		this.state = {
						store: WorkPageStore.getContent()
					};
		
		
		
		
	}
	
	
	render(){
		console.log(this.props.params);
		return(
				<div className="ourWorkPage">
					<div className="container-fluid">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<p>OUR WORK</p>
							<Link className="back" to="/">"BACK"</Link>
							<h1>{this.state.store.headline}</h1>
							<h2>{this.state.store.subhead}</h2>
							<p> <span>Intelligence:</span> {this.state.store.intelligence}</p>
							<p> <span>Relevance:</span> {this.state.store.relevance}</p>
							<p> <span>Action:</span> {this.state.store.action}</p>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<img src={this.state.store.image} alt={this.state.store.title} />
						</div>
					</div>
				</div>
			);
	}
}