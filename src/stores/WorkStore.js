import { EventEmitter } from 'events';

class WorkStore extends EventEmitter{
	
	constructor(){
		super()
		this.work = [
						{
							title:"Mail Launch",
							image:"./assets/img/ourWork/maillaunch.png"
						},
						{
							title:"Rogers",
							image:"./assets/img/ourWork/rogers.png"
						},
						{
							title:"Mail Launch",
							image:"./assets/img/ourWork/connectivity.png"
						},
						{
							title:"Incite",
							image:"./assets/img/ourWork/incite.png"
						},
							{
							title:"Red Lobster",
							image:"./assets/img/ourWork/redlobster.png"
						},
							{
							title:"lg",
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