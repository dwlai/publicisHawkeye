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
				<section id="aboutSection">
					<div><h1>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</h1></div>
				</section>
				<a className="anchor" id="intro"></a>
				<Intro />
				<a className="anchor" id="ourWork"></a>
				<section id="ourWorkSection" className="block -white edge--both--reverse">
					
					<div className="container">
						<div className="row">
							
							<div className="col-md-6">
								<div className="seeOurWork">
									<h2 className="block-title">OUR WORK</h2>

									<h3>See our work </h3>
									<p> A good look at what we've done so far. (And a brief glimpse into what we can do.)</p>
								</div>
							</div>
							
							<OurWork />

						</div>
					</div>
				</section>
				<a className="anchor" id="team"></a>
				<section id="teamSection" className="">

					<div className="container">
						<div className="row">
							<div className="col-sm-5 col-sm-offset-7 col-md-4 col-md-offset-8">
								<h2 className="block-title">OUR LEADERSHIP TEAM</h2>
								<p id="meet"> Meet the men and women in charge of it all.</p>
							</div>
						</div>
					
						<div className="team-bg-img row">
							<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
							<TeamLink className="team-catherine" name={"Catherine Parsons"} title={"VP, CRM"}/>
							<TeamLink className="team-scott" name={"Scott Pinkney"} title={"VP, Executive Director"}/>
							<TeamLink className="team-vish" name={"Vish Ramkissoon"} title={"VP, Decision Science"}/>
							<TeamLink className="team-jennifer" name={"Jennifer McConville"} title={"Director of Production"}/>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		);
	}
	
}