import React from 'react'
import Navlink from './Navlink'

export default class Header extends React.Component{
	render(){
		return(
			<header>
				<img alt="logo"/>
				<ul>
					<Navlink/>
					<Navlink/>
					<Navlink/>
					<Navlink/>
				</ul>
			</header>
			);
		
	}
}