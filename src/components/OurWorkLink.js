import React from 'react'
import { Link } from 'react-router'

export default class OurWorkLink extends React.Component{

	render(){
		return(
				<li className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<Link to="our-work"><img src="./assets/img/ourWork.png" alt={this.props.title}/></Link>
				</li>
				
				);
	}

}