import React, { Component } from 'react';

class Menu1 extends Component {
	render() {
		console.log(this.props.location);
		if(this.props.location.param && this.props.location.param.text) {
			alert(this.props.location.param.text)
		}
		return (
			<div>
				<h3>这是router的基本用法！</h3>
			</div>
		)
	}
}

export default Menu1;