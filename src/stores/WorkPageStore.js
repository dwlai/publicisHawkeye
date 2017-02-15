import { EventEmitter } from "events";

class WorkPageStore extends EventEmitter{
	
			constructor(){
				
				super()
				this.workArticle = [
										{
											title:"CPC SMM",
											titleLink:"cpc-smm",
											image:"./assets/img/ourWork/page-cpcsmm.jpg",
											headline: "Canada Post Smartmail Marketing Launch",
											subhead:"A transformation from mail delivery provider to trusted industry leader",
											intelligence:"This was our chance to reignite the power of direct mail. ",
											relevance:"With extensive research proving the effectiveness of direct mail, Canada Post was in the unique position to break through with its ability to fuse the benefits of physical media with the intelligence of data-driven insight to put brands directly in customers’ hands.  ",
											action: "Understanding that direct mail is comprised of three elements (physicality, data, and connectivity), we reframed it as Smartmail Marketing. This specific combination creates a powerful reaction. Or what we call, the Science of Activation.  ",
										},
										{
											title:"ROGERS PLATINUM LAUNCH",
											titleLink:"rogers-platinum-launch",
											image:"./assets/img/ourWork/page-rogers.jpg",
											headline: "Rogers Platinum MasterCard Launch",
											subhead:"You'll love the feeling of free™",
											intelligence:"Today's consumers feel more economic pressures and want to make the most out of every dollar.",
											relevance:"With the ability to earn 1.75% cash back rewards, with no caps, tiers or limits on earning potential, the Rogers Platinum MasterCard could help customers stretch their household budgets further. What’s more, it had the unique benefit of reducing their Rogers bills—one of the largest bills they pay every month. With the ability to earn 1.75% cash back rewards, with no caps, tiers or limits on earning potential, the Rogers Platinum MasterCard could help customers stretch their household budgets further. What’s more, it had the unique benefit of reducing their Rogers bills—one of the largest bills they pay every month. ",
											action: "Position Rogers Platinum MasterCard as the credit card that offers practical and tangible rewards, including the unique benefit of helping reduce their Rogers bills.",
										},
										{
											title:"CPC CONNECTIVITY",
											titleLink:"cpc-connectivity",
											image:"./assets/img/ourWork/page-connectivity.jpg",
											headline: "Canada Post Smartmail Marketing – Connectivity",
											subhead:"The power of integrating direct mail with digital channels",
											intelligence:"With an always-on consumer, marketers must use multiple channels to engage with customers.  In an increasingly digitally-connected world, direct mail is falling out of consideration due to lack of perceived value, capability, and significance.",
											relevance:"Integrated direct mail and digital campaigns drive more action, elicit greater consumer attention, emotional engagement, and brand engagement. As a key element in Smartmail Marketing, Connectivity delivers a seamless brand experience to deliver maximum results for brands. But how?",
											action: "Easy. We demonstrate ‘The Connectivity Effect’ within the Science of Activation. Moving backwards in time, we followed the journey that brings customers to the moment of action, connecting each consumer touchpoint to show how the purchase decision was influenced through a smart, integrated campaign.",
										},
										{
											title:"CMA INCITE AWARDS",
											titleLink:"cma-incite-awards",
											image:"./assets/img/ourWork/page-incite.jpg",
											headline: "Canada Post's Smartmail Marketing's INCITE Award",
											subhead:"Recognizing strategy, creativity, and results in Direct Mail",
											intelligence:"Big data, deeper analytics capabilities, and innovations in technology provide marketers with the ability to command attention and connect more effectively than ever before - especially in direct mail.",
											relevance:"As a category of the most relevant awards show in the marketing industry in Canada (the CMA), the INCITE Award celebrates the best-in-class Direct Mail campaign of the year.",
											action: "To catch the attention of industry folk and drive submissions, we developed a cheeky campaign that included print, social, and digital elements, hilariously poking fun at and bemoaning the experience of winning (i.e., First Place Problems).  ",
										},
											{
											title:"RED LOBSTER",
											titleLink:"red-lobster",
											image:"./assets/img/ourWork/page-redlobster.jpg",
											headline: "My Red Lobster Rewards" ,
											subhead:"Rewards are now on the menu",
											intelligence:"Consumers want a simple program that saves them money and recognizes their loyalty to a brand.",
											relevance:"Red Lobster was preparing to launch their all-new rewards loyalty program, My Red Lobster Rewards, where guests earn points toward free menu items and other special offers, just for dining at Red Lobster.",
											action: "To generate enrollment, engagement, and excitement around the program, we developed a flow of templated email communications that would usher Red Lobster guests through an elevated and exclusive experience  with valuable rewards and content relevant to their tastes, preferences, and behaviours. ",
										},
											{
											title:"LG DESIGN COLLECTION",
											titleLink:"lg-design-collection",
											image:"./assets/img/ourWork/page-lg.jpg",
											headline: "Rewards are now on the menu ",
											subhead:"Because life's more about having the latest technology",
											intelligence:"Consumers want to browse content in a way that prioritizes relevant and personalized experiences.  And the demand is only getting stronger.",
											relevance:"LG’s products are designed to help connect with who and what matters most to their customers. LG’s Life Good eNews serves monthly content including product announcements, special offers, and promotions, giving them the power to do even more at home and on the go. ",
											action: "Faced with the creative opportunity to transition to something even more rich and robust, we redesigned the eNews template to LG’s new campaign platform and implemented a modular library and testing to give them the adaptability to develop and deliver fresh, meaningful content.",
										}

									]	
	
			}
			
			getContent(){
				return this.workArticle;
			}

}

const workPageStore = new WorkPageStore();

export default workPageStore;