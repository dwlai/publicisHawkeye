import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import OurWorkPage from './pages/OurWorkPage';


const app = document.getElementById('app');

ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="our-work-page/:article" component={OurWorkPage}>	
			</Route>
		</Route>
	</Router>, 
	app);

