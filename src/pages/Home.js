import React from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import TeamLink from '../components/TeamLink';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import OurWork from '../components/OurWork';


export default class Home extends React.Component{
	
	render(){
		return (
			<div>
				<NavBar />
				<div id="aboutSection">
					<div><p>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</p></div>
				</div>
				<a className="anchor" id="intro"></a>
				<Intro />
				<a className="anchor" id="ourWork"></a>
				<div id = "ourWorkSection" className="container-fluid">
					
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" > 
								<div className="seeOurWork">
									<h6>OUR WORK</h6>
									<h2>See our work </h2>
									<p> A good look at what we've done so far. (And a brief glimpse into what we can do.)</p>
								</div>
							</div>
							<OurWork />
						</div>
				</div>
				<a className="anchor" id="team"></a>
				<div id="teamSection">
						<h5>OUR LEADERSHIP TEAM</h5>
						<p id="meet"> Meet the men and women in charge of it all.</p>
					<ul className="row">
						<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
						<TeamLink style={{marginTop: 174 + '%'}} name={"Catherine Parsons"} title={"VP, CRM"}/>
						<TeamLink style={{marginTop: 188 + '%'}} name={"Scott Pinkney"} title={"VP, Executive Director"}/>
						<TeamLink style={{marginTop: 135 + '%'}} name={"Vish Ramkissoon"} title={"VP, Decision Science"}/>
						<TeamLink style={{marginTop: 165 + '%'}} name={"Jennifer McConville"} title={"Director of Production"}/>
					</ul>
				</div>
				<Footer/>
			</div>
		);
	}
	
}