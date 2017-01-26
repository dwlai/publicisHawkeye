import { EventEmitter } from "events";

class IntroStore extends EventEmitter{
	
	constructor(){
		super()
		this.intro = [
		
							{
								title: "We create Relationship Moments�.",
								content: "From grand gestures to �just because�, every moment matters in defining a relationship � whether in our personal lives or in business. It�s these moments that we seize on. It�s these moments that make anyone feel special, heard, and compelled to take immediate action. And together, it�s these moments that ultimately determine how your relationship grows. ",
								image:"./assets/img/introImage.png"
							},
														{
								title: "What can we do? A lot.",
								content: "CRM Direct & Digital Marketing Loyalty Marketing Customer & Data Ingelligence Customer & Data Analytics Print & Digital Production Database Management Marketing Automation And this is where we do it all. Like our imaginations, our expertise spans far and wide.  ",
								image:"./assets/img/introImage.png"
							},
														{
								title: "We�ve got it down to an art, and down to a science.",
								content: "The best Relationship Moments arise from a perfect blend of intelligence, relevance, and action. Intelligence We transform data into a more robust understanding of when, why, and how consumers act.  Relevance Our deep understanding of the consumer inspires us to craft compelling storytelling and purposeful design for timely, targeted messages that resonate loudly with your audience. Action Action drives reaction. We focus on creative ideas that get measurable and actionable results, continuously testing and optimizing, and building towards the next success.",
								image:"./assets/img/introImage.png"
							},
														{
								title: "Experience Intelligence Platform",
								content: "[Subhead] Connecting the right message to the right person at the right time � in real time. [Copy] It�s the place where we start, continue and keep countless conversations alive across all channels relevant to our clients, their customers, and their best prospects. It�s our relentless commitment to iterative testing, learning, and scaling at a pace that embraces the speed of the customer journey. It�s the engine that drives our Relationship Moments. EIP enables and empowers brands to listen, engage, and react to customers� needs in a more seamless and effective way. Working behind the scenes, our agile, always-on hub combines unstructured and unstructured data collected from digital touchpoints and interactions. It builds a customer profile that continuously evolves with their behaviors to create the perfect cross-channel experiences. ",
								image:"./assets/img/introImage.png"
							}
	
						]
		
	}
	
	getContent(item){
		return this.intro[item];
	}
	
	
	
}

const introStore = new IntroStore;

export default introStore;