import React from 'react'
import Navlink from './Navlink'

export default class NavBar extends React.Component{				
				
			render(){	
				return(
				<div id="NavBar">
					<ul>
						<Navlink/>
						<Navlink/>
						<Navlink/>
						<Navlink/>
					</ul>
				</div>
				);
			}
}