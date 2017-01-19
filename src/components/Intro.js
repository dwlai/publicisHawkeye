import React from 'react'
import IntroPic from './IntroPic'
import AboutLink from './AboutLink'
import AboutContent from './AboutContent'

export default class Intro extends React.Component{
	
	render(){
		return (
				<div id ="Intro">
					<IntroPic />
					<ul>
						<AboutLink />
						<AboutLink />
						<AboutLink />
						<AboutLink />
					</ul>
					<AboutContent />
				</div>
		);
	}

	}
