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
					<div><p>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</p></div>
				</div>
				<Intro />
				<div id = "ourWork">
					<p>Our Work</p>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" > 
								<h2>See our work </h2>
								<p> A good look at what we've done so far. (And a brief glimpse into what we can do.)</p>
							</div>
							<ul className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<OurWorkLink title="CPC SMM"/>
								<OurWorkLink title="ROGERS PLATINUM LAUNCH"/>
								<OurWorkLink title="CPC CONNECTIVITY"/>
								<OurWorkLink title="RED LOBSTER"/>
								<OurWorkLink title="LG DESIGN COLLECTION"/>
								<OurWorkLink title="CMA INCITE AWARDS"/>
							</ul>
						</div>
				</div>
				<div id="team">
					<h2>OUR LEADERSHIP TEAM</h2>
					<p> Meet the men and women in charge of it all.</p>			
					<ul className="row">
						<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
						<TeamLink style={{marginTop: 164 + '%'}}/>
						<TeamLink style={{marginTop: 188 + '%'}}/>
						<TeamLink style={{marginTop: 119 + '%'}}/>
						<TeamLink style={{marginTop: 150 + '%'}}/>
					</ul>
				</div>
				<Footer/>
			</div>
		);
	}
	
}