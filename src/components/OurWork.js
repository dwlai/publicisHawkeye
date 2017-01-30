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
	
			return(
							<div className="work-group col-sm-6">
							{OurWorkLinks}
							</div>
			);
			
		}
	
}