import React from 'react';
import { Link } from 'react-router';

export default class OurWorkPage extends React.Component{
	
	render(){
		return(
				<div className="ourWorkPage">
					<div className="container-fluid">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<p>OUR WORK</p>
							<Link className="back" to="/#ourWork">"BACK"</Link>
							<h1>TITLE</h1>
							<h2>SUB TITLE</h2>
							<p> <span>Intelligence:</span> Content</p>
							<p> <span>Relevance:</span> Content</p>
							<p> <span>Action:</span> Content</p>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<img alt="content" />
						</div>
					</div>
				</div>
			);
	}
}