import React from 'react'

export default class Footer extends React.Component{
	render(){
		return(
			<footer id="footer">	
				<p>GET IN TOUCH</p>
					<ul>
						<li><img src="./assets/img/map.png" alt="map"/> 111 Queen St E, Suite 200 Toronto, ON M5C 1S2</li>
						<li><img src="./assets/img/phone.png" alt="phone"/>(416) 925 -7733</li>
						<li><img src="./assets/img/email.png" alt="email"/> hello@publicishawkeye.ca</li>
					</ul>
					<img id="footerlogo" src="./assets/img/footerlogo.png" alt="footer logo" />
			</footer>
		);
		
	}
}