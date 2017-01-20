import React from 'react'
import Navlink from './Navlink'

export default class NavBar extends React.Component{				
				
			render(){	
				return(
				<div id="NavBar">
					<ul>
						<Navlink title="ABOUT"/>
						<Navlink title="OUR WORK"/>
						<Navlink title="OUR TEAM"/>
						<Navlink title="CONTACT"/>
					</ul>
				</div>
				);
			}
}