import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router'


export default class App extends React.Component {
    render() {
        return (
		
			<div>
				<Header />
				{this.props.children}
				<Link to="/">Home</Link>
				<Link to="our-work">Our Work</Link>
				<Footer />
			</div>

        );
    }
}