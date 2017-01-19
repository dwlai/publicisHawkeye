import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
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
					<Link to="our-work">Our Work</Link>
				</div>
				<Footer/>
			</div>
		);
	}
	
}