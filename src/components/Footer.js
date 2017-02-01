import React from 'react'

export default class Footer extends React.Component{
	render(){
		return(
			<footer id="footer">
				<div className="container">
					
					
						{/* <div className="block-title"> */}
							<h2 className="block-title">GET IN TOUCH</h2>
						{/* </div> */}
						<ul className="footer-list">
						{/*
							<li><img src="./assets/img/map.png" alt="map"/> 111 Queen St E, Suite 200<br/>Toronto, ON M5C 1S2</li>
							<li><img src="./assets/img/phone.png" alt="phone"/>(416) 925 -7733</li>
							<li><img src="./assets/img/email.png" alt="email"/> hello@publicishawkeye.ca</li>
						*/}

							<li className="address"><i className="icon-location"></i> 111 Queen St E, Suite 200<br/>Toronto, ON M5C 1S2</li>
							<li><i className="icon-phone"></i> (416) 925-7733</li>
							<li><i className="icon-mail"></i> hello@publicishawkeye.ca</li>

						</ul>
						{/* <img id="footerlogo" src="./assets/img/footerlogo.png" alt="footer logo" /> */}
					

				</div>
			</footer>
		);
		
	}
}