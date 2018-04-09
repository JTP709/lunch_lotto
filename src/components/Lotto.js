import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import './styles/Lotto.css';

class Lotto extends Component {
	render() {
		return (
			<div className="lottoDiv component_divs">
				<h2 id="lotto_header" className="component_headers">Today we'll be having...</h2>
				<Well id="winnerDiv">
					{this.props.winner}
				</Well>
				<div id="play_btn_div">
					<Button id="play_btn" bsStyle="primary" bsSize="large" onClick={this.props.pickWinner}>
						Play!
					</Button>
				</div>
			</div>
		);
	}
}

export default Lotto;
