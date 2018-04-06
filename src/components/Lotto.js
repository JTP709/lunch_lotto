import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import './Lotto.css';

class Lotto extends Component {
	render() {
		return (
			<div className="lottoDiv">
				<h1>Lunch Lotto!</h1>
				<h3>Today we'll be having...</h3>
				<Well id="winnerDiv">
					{this.props.winner}
				</Well>
				<Button bsStyle="primary" bsSize="large" onClick={this.props.playLotto}>
					Play!
				</Button>
			</div>
		);
	}
}

export default Lotto;
