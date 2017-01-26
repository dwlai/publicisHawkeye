import { EventEmitter } from 'events';

class WorkStore extends EventEmitter{
	
	constructor(){
		super()
		this.work = [
						{
							title:"CPC SMM",
							image:"./assets/img/ourWork/maillaunch.png"
						},
						{
							title:"ROGERS PLATINUM LAUNCH",
							image:"./assets/img/ourWork/rogers.png"
						},
						{
							title:"CPC CONNECTIVITY",
							image:"./assets/img/ourWork/connectivity.png"
						},
						{
							title:"CMA INCITE AWARDS",
							image:"./assets/img/ourWork/incite.png"
						},
							{
							title:"RED LOBSTER",
							image:"./assets/img/ourWork/redlobster.png"
						},
							{
							title:"LG DESIGN COLLECTION",
							image:"./assets/img/ourWork/lg.png"
						}

					]	
	}
	
	getAll(){
		return this.work;
	}
	
}

const workStore = new WorkStore;

export default workStore;