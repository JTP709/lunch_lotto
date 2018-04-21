import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import { pickWinnerUtil } from '../utils/utilities';
import './styles/Lotto.css';

class Lotto extends Component {
	clickHandler=()=>{
		const { filteredList, winner, pickWinner } = this.props;
		const payload = pickWinnerUtil(filteredList, winner.name);
		pickWinner(payload);
	}
	render() {
		const { winner } = this.props;
		return (
			<div className="lottoDiv component_divs">
				<h2 id="lotto_header" className="component_headers">Today we'll be having...</h2>
				<Well id="winnerDiv">
					{ winner }
				</Well>
				<div id="play_btn_div">
					<Button id="play_btn" bsStyle="primary" bsSize="large" onClick={ this.clickHandler }>
						Play!
					</Button>
				</div>
			</div>
		);
	}
}

export default Lotto;
