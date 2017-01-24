import React from 'react'
import Navlink from './Navlink'

export default class NavBar extends React.Component{				
				
			render(){	
				return(
				<div id="NavBar">
					<ul>
						<Navlink section={"#intro"} title={"ABOUT"}/>
						<Navlink section={"#ourWork"} title={"OUR WORK"}/>
						<Navlink section={"#team"} title={"OUR TEAM"}/>
						<Navlink section={"#footer"} title={"CONTACT"}/>
					</ul>
				</div>
				);
			}
}