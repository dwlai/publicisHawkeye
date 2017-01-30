import React from 'react'
import Navlink from './Navlink'
import { Link } from 'react-router';

export default class NavBar extends React.Component{				
				
			render(){	
				return(

				<nav className="navbar navbar-default navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <Link to="/" className="navbar-brand"><img className="img-responsive" src ="assets/img/logo.png" alt="logo"/></Link>
		        </div>

		        <div id="navbar" className="navbar-collapse collapse">
		          <ul className="nav navbar-nav navbar-right">
		            <Navlink section={"#intro"} title={"ABOUT"}/>
									<Navlink section={"#ourWork"} title={"OUR WORK"}/>
									<Navlink section={"#team"} title={"OUR TEAM"}/>
									<Navlink section={"#footer"} title={"CONTACT"}/>
		          </ul>
		        </div>
		      </div>
		    </nav>

				);
			}
}