import { EventEmitter } from "events";

class IntroStore extends EventEmitter{
	
	constructor(){
		super()
		this.intro = [
		
							{
								id:0,
								title: "",
								content: 'From grand gestures to "just because",'+" every moment matters in defining a relationship - whether in our personal lives or in business. It's these moments that we seize on. It's these moments that make anyone feel special, heard, and compelled to take immediate action. And together, it's these moments that ultimately determine how your relationship grows. ",
								image:"",
								image2: "./assets/img/difference/flower-0.png",
								className0:"introDifference",
								className: "flower",
								className2: "flower2"					
							},
							{
								id:1,
								title: "What can we do? A lot.",
								content: "",
								image:"./assets/img/eclipse.png",
								image2: "./assets/img/capabilities/brain-01-loyalty.png",
								className0:"introCapabilities",
								className: "brain",
								className2: "loyalty"
							},
							{
								id:2,
								title: "We've got it down to an art, and down to a science.",
								content: "The best Relationship Moments arise from a perfect blend of intelligence, relevance, and action.",
								image:"./assets/img/eclipse.png",
								image2: "./assets/img/approach/triangle-final.png",
								className0:"introApproach",
								className:"approach",
								className2: "vector"
								
							},
							{
								id:3,
								title: "Experience Intelligence Platform",
								content: "",
								image:"./assets/img/eclipse.png",
								image2: "./assets/img/data/data.png",
								className0:"introData",
								className:"data",
								className2:"data2"								
							}
	
						]
		
	}
	
	getContent(item){
		return this.intro[item];
	}
	
	/*getsubContent(item){
		var subContent;
		if( item == 1)
		{
			subContent = this.intro[2].intelligence;
		}
		else if( item == 2)
		{
			subContent = this.intro[2].relevance;
		}		
		else if( item == 3)
		{
			subContent = this.intro[2].action;
		}
		
		return(subContent);
	
			
	}*/
	
}

const introStore = new IntroStore;

export default introStore;
