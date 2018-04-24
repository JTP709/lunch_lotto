import React, { Component } from 'react';
import FilterButton from './FilterButton';
import { ButtonGroup, Button } from 'react-bootstrap';
import { setFilterUtil, capitalizeKeyWord } from '../utils/utilities';
import './styles/Filters.css';

class Filters extends Component {
	clickHandler=(key,value)=>{
		const { filters, restaurants, setFilter } = this.props;
		const payload = setFilterUtil(filters, restaurants, key, value);
		setFilter(payload);
	}

	render(){
		const { filters, resetFilter } = this.props;
		return(
			<div className="filtersDiv component_divs">
				<h2 id="filters_header" className="component_headers">Filters</h2>
				{ /* reset from false */
					filters.length > 0 ?
						<div key={ `${'filter'}_btn_group` }>
							<h4>Categories:</h4>
							<ButtonGroup>
								{
									filters.map(category => {
										const name = Object.keys(category)[0];
										const toggle = category[name];
										return (
											<FilterButton
												key={ `${name}_filterBtn`}
												clickHandler={ this.clickHandler }
												active={ toggle }
												name={ name }
											/>										
										)
									})
								}
							</ButtonGroup>
						</div> :
						<h4>No filters found!</h4>
				}
				<hr/>
				<Button onClick={ resetFilter }>
					Reset All
				</Button>
			</div>
		)
	}
}

export default Filters;