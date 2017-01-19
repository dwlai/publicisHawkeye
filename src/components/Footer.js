import React from 'react'

export default class Footer extends React.Component{
	render(){
		return(
			<footer id="footer">	
				<p>GET IN TOUCH</p>
					<ul>
						<li><img alt="map"/> 111 Queen St E, Suite 200 Toronto, ON M5C 1S2</li>
						<li><img alt="phone"/>(416) 925 -7733</li>
						<li><img alt="email"/> hello@publicishawkeye.ca</li>
					</ul>
			</footer>
		);
		
	}
}