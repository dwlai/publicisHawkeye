import { EventEmitter } from 'events';

class WorkStore extends EventEmitter{
	
	constructor(){
		super()
		this.work = [
						{
							id:1,
							title:"CPC SMM",
							titleLink:"cpc-smm",
							image:"./assets/img/ourWork/tile-cpcsmm.png"
						},
						{
							id:2,
							title:"ROGERS PLATINUM LAUNCH",
							titleLink:"rogers-platinum-launch",
							image:"./assets/img/ourWork/tile-rogers.png"
						},
						{
							id:3,
							title:"CPC CONNECTIVITY",
							titleLink:"cpc-connectivity",
							// image:"./assets/img/ourWork/connectivity.png"
							image:""
						},
						{
							id:4,
							title:"CMA INCITE AWARDS",
							titleLink:"cma-incite-awards",
							image:"./assets/img/ourWork/tile-incite.png"
						},
							{
							id:5,
							title:"RED LOBSTER",
							titleLink:"red-lobster",
							image:"./assets/img/ourWork/tile-redlobster.png"
						},
							{
							id:6,
							title:"LG DESIGN COLLECTION",
							titleLink:"lg-design-collection",
							image:"./assets/img/ourWork/tile-lg.png"
						}

					]	
	}
	
	getAll(){
		return this.work;
	}
	
}

const workStore = new WorkStore;

export default workStore;