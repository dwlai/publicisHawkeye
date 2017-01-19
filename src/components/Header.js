import React from 'react'
import NavBar from './NavBar'

export default class Header extends React.Component{
	render(){
		return(
			<header>
				<img alt="logo"/>
				<NavBar />
			</header>
			);
		
	}
}