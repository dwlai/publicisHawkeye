import { EventEmitter } from 'events';

class WorkStore extends EventEmitter{
	
	constructor(){
		super()
		this.work = [
						{
							title:"CPC SMM",
							image:"./assets/img/ourWork/maillaunch-00.png"
						},
						{
							title:"ROGERS PLATINUM LAUNCH",
							image:"./assets/img/ourWork/rogers-00.png"
						},
						{
							title:"CPC CONNECTIVITY",
							// image:"./assets/img/ourWork/connectivity.png"
							image:""
						},
						{
							title:"CMA INCITE AWARDS",
							image:"./assets/img/ourWork/incite-00.png"
						},
							{
							title:"RED LOBSTER",
							image:"./assets/img/ourWork/redlobster-00.png"
						},
							{
							title:"LG DESIGN COLLECTION",
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