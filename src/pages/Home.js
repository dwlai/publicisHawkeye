import React from 'react'
import Intro from '../components/Intro'


export default class Home extends React.Component{
	
	render(){
		return (
			<div>
				<div id="about">
					<div>WE ARE A 1:1 CUSTOMER ENGAGEMENT AGENCY LOCATED IN TORONTO</div>
					<Intro />
				</div>
			</div>
		);
	}
	
}