import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import OurWorkLink from '../components/OurWorkLink'
import Footer from '../components/Footer'
import { Link } from 'react-router'



export default class Home extends React.Component{
	
	render(){
		return (
			<div>
				<Header />
				<div id="about">
					<div>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</div>
					<Intro />
					<div>Our Work</div>
					<div> 
						<h2>See our work </h2>
						<p> A good look at what we've done so far. (And a brief glimpse into what we can do.</p>
					</div>
					<ul>
						<OurWorkLink />
						<OurWorkLink />
						<OurWorkLink />
						<OurWorkLink />
						<OurWorkLink />
						<OurWorkLink />
					</ul>
				</div>
				<Footer/>
			</div>
		);
	}
	
}