import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';





export default class App extends React.Component {
    render() {
			
			const {location } = this.props;
			
        return (
			<div>
			<ReactCSSTransitionGroup component='div' transitionName="fade" transitionEnterTimeout={10000} transitionLeaveTimeout={10000}>
				{React.cloneElement(this.props.children, {key: location.pathname, parentComponent:this})}
			</ReactCSSTransitionGroup>
			</div>

        );
    }
}