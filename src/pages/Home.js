import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import OurWorkLink from '../components/OurWorkLink'
import TeamLink from '../components/TeamLink'
import Footer from '../components/Footer'
import { Link } from 'react-router'



export default class Home extends React.Component{
	
	render(){
		return (
			<div>
				<Header />
				<div id="about">
					<div>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</div>
				</div>
				<Intro />
				<div id = "ourWork">
					<p>Our Work</p>
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
				<div id="team">
					<h2>OUR LEADERSHIP TEAM</h2>
					<p> Meet the men and women in charge of it all.</p>			
					<ul>
						<TeamLink />
						<TeamLink />
						<TeamLink />
						<TeamLink />
					</ul>
				</div>
				<Footer/>
			</div>
		);
	}
	
}