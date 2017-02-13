import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';





export default class App extends React.Component {





    render() {
			
			const {location} = this.props;
			var segment = location.pathname.split('/')[2] || 'root';
        return (
			<div>
			<ReactCSSTransitionGroup transitionName={segment === 'root'? 'reversePageSwap' : 'pageSwap'} transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>
				{React.cloneElement(this.props.children, {key: segment, parentComponent:this})}
			</ReactCSSTransitionGroup>
			</div>

        );
    }
}
