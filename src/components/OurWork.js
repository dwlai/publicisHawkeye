import React from 'react';
import OurWorkLink from './OurWorkLink';
import WorkStore from '../stores/WorkStore';

export default class OurWork extends React.Component{
	
		constructor(){
			super();
			this.state ={
							work: WorkStore.getAll()	
						};
		}
	
		render(){
			const {work} = this.state;
			
			const OurWorkLinks = work.map((work) => {
					return <OurWorkLink key={work.id}{...work} />;
			});
			
			console.log(OurWorkLinks);
			
			return(
							<ul className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							{OurWorkLinks}
							</ul>
			);
			
		}
	
}