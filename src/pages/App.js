import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';





export default class App extends React.Component {





    render() {
			
			const {location} = this.props;
			var segment = location.pathname.split('/')[2] || 'root';
        return (
			<div>
			<ReactCSSTransitionGroup transitionName={segment === 'root'? 'reversePageSwap' : 'pageSwap'} transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
				{React.cloneElement(this.props.children, {key: segment, parentComponent:this, style: {top: window.pageYOffset}})}
			</ReactCSSTransitionGroup>
			</div>

        );
    }
}
