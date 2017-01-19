import React from 'react';
import Home from './Home';
import { Link } from 'react-router';

export default class OurWork extends React.Component{
	
	render(){
		return(
			<div>
				<h1>OUR WORK</h1>
				<Link to="/" component={Home}>Back</Link>
			</div>
			);
	}
}