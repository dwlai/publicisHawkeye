import React from 'react'
import WavyCircle from './WavyCircle'
import AboutLink from './AboutLink'
import AboutContent from './AboutContent'

export default class Intro extends React.Component{
	
	render(){
		return (
				<div>
					<WavyCircle />
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
