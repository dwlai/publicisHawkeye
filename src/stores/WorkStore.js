import { EventEmitter } from 'events';

class WorkStore extends EventEmitter{
	
	constructor(){
		super()
		this.work = [
						{
							title:"CPC SMM",
							titleLink:"cpc-smm",
							image:"./assets/img/ourWork/maillaunch-00.png"
						},
						{
							title:"ROGERS PLATINUM LAUNCH",
							titleLink:"rogers-platinum-launch",
							image:"./assets/img/ourWork/rogers-00.png"
						},
						{
							title:"CPC CONNECTIVITY",
							titleLink:"cpc-connectivity",
							// image:"./assets/img/ourWork/connectivity.png"
							image:""
						},
						{
							title:"CMA INCITE AWARDS",
							titleLink:"cma-incite-awards",
							image:"./assets/img/ourWork/incite-00.png"
						},
							{
							title:"RED LOBSTER",
							titleLink:"red-lobster",
							image:"./assets/img/ourWork/redlobster-00.png"
						},
							{
							title:"LG DESIGN COLLECTION",
							titleLink:"lg-design-collection",
							image:"./assets/img/ourWork/lg-00.png"
						}

					]	
	}
	
	getAll(){
		return this.work;
	}
	
}

const workStore = new WorkStore;

export default workStore;