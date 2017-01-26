import { EventEmitter } from "events";

class WorkPageStore extends EventEmitter{
	
			constructor(){
				
				super()
				this.workArticle = [
										{
											title:"CPC SMM",
											image:"./assets/img/ourWork/mailLaunchPage1.png",
											headline: "Canada Post Smartmail Marketing Launch",
											subhead:"A transformation from mail delivery provider to trusted industry leader",
											intelligence:"cpc smm",
											relevance:"cpc smm",
											action: "relevance",
										},
										{
											title:"ROGERS PLATINUM LAUNCH",
											image:"./assets/img/ourWork/rogers.png",
											headline: "Rogers Platinum MasterCard Launch",
											subhead:"You’ll love the feeling of freeTM",
											intelligence:"rogers",
											relevance:"rogers",
											action: "rogers",
										},
										{
											title:"CPC CONNECTIVITY",
											image:"./assets/img/ourWork/connectivity.png",
											headline: "Canada Post Smartmail Marketing – Connectivity",
											subhead:"The power of integrating direct mail with digital channels",
											intelligence:"connect",
											relevance:"connect",
											action: "connect",
										},
										{
											title:"CMA INCITE AWARDS",
											image:"./assets/img/ourWork/incite.png",
											headline: "Canada Post’s Smartmail Marketing’s INCITE Award",
											subhead:"Recognizing strategy, creativity, and results in Direct Mail",
											intelligence:"connect",
											relevance:"connect",
											action: "connect",
										},
											{
											title:"Red Lobster",
											image:"./assets/img/ourWork/redlobster.png",
											headline: "My Red Lobster Rewards" ,
											subhead:"Rewards are now on the menu",
											intelligence:"connect",
											relevance:"connect",
											action: "connect",
										},
											{
											title:"LG DESIGN COLLECTION",
											image:"./assets/img/ourWork/lg.png",
											headline: "Rewards are now on the menu ",
											subhead:"Because life’s more about having the latest technology",
											intelligence:"connect",
											relevance:"connect",
											action: "connect",
										}

									]	
	
			}
			
			getContent(){
				return(this.workArticle[3]);
			}

}

const workPageStore = new WorkPageStore();

export default workPageStore;