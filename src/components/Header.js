import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router';

export default class Header extends React.Component{
	render(){
		return(
			<header>
			
				<NavBar />
			</header>
			);
		
	}
}