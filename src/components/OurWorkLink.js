import React from 'react'
import { Link } from 'react-router'

export default class OurWorkLink extends React.Component{

	render(){
    var divStyle = {
        backgroundImage: 'url(' + this.props.image + ')'
    }

		return(
				<div className="work-individual col-sm-6">
					<Link to={"our-work-page/" + this.props.title}> {/*<img src={this.props.image} alt={this.props.title}/> */}
            <div className="work-img" style={divStyle} title={this.props.title}>&nbsp;</div>
          </Link>
				</div>
				
				);
	}

}