import React from 'react';
import OurWorkLink from './OurWorkLink';
import WorkStore from '../stores/WorkStore';

export default class OurWork extends React.Component{
	
		render(){
			
			return(
							<ul className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<OurWorkLink title={"CPC SMM"}/>
								<OurWorkLink title={"ROGERS PLATINUM LAUNCH"}/>
								<OurWorkLink title={"CPC CONNECTIVITY"}/>
								<OurWorkLink title={"RED LOBSTER"}/>
								<OurWorkLink title={"LG DESIGN COLLECTION"}/>
								<OurWorkLink title={"CMA INCITE AWARDS"}/>
							</ul>
			);
			
		}
	
}