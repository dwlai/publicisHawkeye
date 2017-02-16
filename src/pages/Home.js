import React from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import TeamLink from '../components/TeamLink';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import OurWork from '../components/OurWork';
import IntroStore from '../stores/IntroStore';
import IntroLink from '../components/IntroLink';
import $ from 'jquery';
import ReactCSSTransitionReplace from 'react-css-transition-replace';


export default class Home extends React.Component{


	constructor(){
			super();
			this.state = {
						intro: IntroStore.getContent(0),
						
			};
	}
	
	changeContent(item){
		
		var $introLinks = $('.introLinks li a');
		$introLinks.removeClass();
		$introLinks[item].className = "active";

		this.setState({
			intro: IntroStore.getContent(item),
			});
	}

		componentWillUnmount(){

			window.scrollTo(0,0);
			window.removeEventListener('scroll', this.handleScroll);
		}

		componentDidMount(){

			window.addEventListener('scroll', this.handleScroll);

	        if($('#ourWorkPage').length !== 0 ) // part of page transition
			       {
						var $leavingPage = $('#ourWorkPage');
						var scroll = $('#ourWork').offset().top
						$leavingPage.css("top",scroll);
						window.scrollTo(0,scroll);

				 	}
		}

	handleScroll(){


		var $navLinks = $('#navbar a');
		var scrollPos = window.pageYOffset;
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();
		$navLinks.each(function(){
			var refLink = this.getAttribute('data');
			var $refElement = $('#'+ refLink);
			if( $refElement.position().top <= scrollPos){

				$navLinks.removeClass('active');
				this.className ='active';

			}
			else
				this.className = "";

		});

		  if(scrollPos + windowHeight > documentHeight-50) {
       				$navLinks.removeClass('active');
       				$navLinks[3].className = "active";
   			}

	}

	scrollToSection(section){

		var $target = $('#'+section);
		$('html, body').stop().animate({ 'scrollTop' : $target.offset().top +2},
		500, 'swing');

	}

	
	
	render(){
		
		const { intro } = this.state;
		
		return (
			<div id ="home">
				<NavBar scrollToSection={this.scrollToSection.bind(this)}/>
				<section id="heroSection">
					<div className="heroTitle">
						<img className="circle-crop" src="./assets/img/circle-crop.png" alt="circle-crop"/>
						<p className="heroContent"> We are a 1:1 customer engagement agency located in Toronto.</p>
					</div>
				</section>
				<a className="anchor" id="intro"></a>
				
				<div id="introSection" className="">
			
					<div className="screen">
						<div className="introLinksWrap col-sm-6 col-sm-offset-6">
							<ul className="introLinks">
								<IntroLink className={"active"} changeContent={this.changeContent.bind(this)} item = {'0'} title={["our",<br/>, "difference"]}/>
								<IntroLink changeContent={this.changeContent.bind(this)} item = {'1'} title={["our",<br/>, "capabilities"]}/>
								<IntroLink changeContent={this.changeContent.bind(this)} item = {'2'} title={["our",<br/>, "approach"]}/>
								<IntroLink changeContent={this.changeContent.bind(this)} item = {'3'} title={["our",<br/>, "data"]}/>
							</ul>
						</div>

						<div className="introComponentWrap">
							 <ReactCSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>
								<Intro key={intro.id} {...intro} />
							</ReactCSSTransitionReplace>
						</div>
					</div>
						
				</div>
				<a className="anchor" id="ourWork"></a>
				<section id="ourWorkSection" className="block -white edge--both--reverse">
					
					<div className="container">
						<div className="row">
							
							<div className="col-md-6">
								<div className="seeOurWork">
									<h2 className="block-title">OUR WORK</h2>

									<h3>See our work </h3>
									<p> A good look at what we've done so far. (And a brief glimpse into what we can do.)</p>
								</div>
							</div>
							
							<OurWork />

						</div>
					</div>
				</section>
				<a className="anchor" id="team"></a>
				<section id="teamSection" className="">

					<div className="container">
						<div className="row">
							<div className="col-sm-5 col-sm-offset-7 col-md-4 col-md-offset-8">
								<h2 className="block-title">OUR LEADERSHIP TEAM</h2>
								<p id="meet"> Meet the men and women in charge of it all.</p>
							</div>
						</div>
					
						<div className="team-bg-img row">
							<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
							<TeamLink className="team-catherine" name={"Catherine Parsons"} title={"VP, CRM"}/>
							<TeamLink className="team-scott" name={"Scott Pinkney"} title={"VP, Executive Creative Director"}/>
							<TeamLink className="team-vish" name={"Vish Ramkissoon"} title={"VP, Decision Science"}/>
							<TeamLink className="team-jennifer" name={"Jennifer McConville"} title={"Director of Production"}/>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		);
	}
	
}