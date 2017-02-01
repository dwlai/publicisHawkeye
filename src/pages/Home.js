import React from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import TeamLink from '../components/TeamLink';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import OurWork from '../components/OurWork';
import IntroStore from '../stores/IntroStore';
import IntroLink from '../components/IntroLink';


export default class Home extends React.Component{


	constructor(){
			super();
			this.state = {
						intros: IntroStore.getContent(),
						
			};
	}
	
	changeContent(item){
		alert(item);
		
	}
	
	
	render(){
		
		const { intros } = this.state;
		
		const IntroComponents = intros.map((intro) =>{
				return <Intro key ={intro.id}{...intro}/>
		});
		
		
		return (
			<div>
				<NavBar />
				<div id="aboutSection">
					<div><h1>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</h1></div>
				</div>
				<a className="anchor" id="intro"></a>
				
				<div id ="introSection" className="container-fluid">
					<ul className="introLinks">
						<IntroLink changeContent={this.changeContent.bind(this)} item = {'0'} title={"our difference"}/>
						<IntroLink changeContent={this.changeContent.bind(this)} item = {'1'} title={"our capabilities"}/>
						<IntroLink changeContent={this.changeContent.bind(this)} item = {'2'} title={"our approach"}/>
						<IntroLink changeContent={this.changeContent.bind(this)} item = {'3'} title={"our data"}/>
					</ul>
					<div className="screen">
						<div className="filmstrip">
							{IntroComponents}
						</div>
					</div>
						
				</div>
				<a className="anchor" id="ourWork"></a>
				<div id = "ourWorkSection" className="container-fluid">
					
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" > 
								<div className="seeOurWork">
									<h2 className="block-title">OUR WORK</h2>
									<h3>See our work </h3>
									<p> A good look at what we've done so far. (And a brief glimpse into what we can do.)</p>
								</div>
							</div>
							<OurWork />
						</div>
				</div>
				<a className="anchor" id="team"></a>
				<div id="teamSection">
					<div className="row">
						<div className="col-sm-4 col-sm-offset-8">
							<h2 className="block-title">OUR LEADERSHIP TEAM</h2>
							<p id="meet"> Meet the men and women in charge of it all.</p>
						</div>
					</div>
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