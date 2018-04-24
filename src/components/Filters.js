import React, { Component } from 'react';
import FilterButton from './FilterButton';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
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
						<ListGroup key={ `${'filter'}_btn_group` }>
							{
								filters.map(category => {
									const name = Object.keys(category)[0];
									const toggle = category[name];
									return (
										<ListGroupItem
											key={ `${name}_filterBtn_${toggle}`}
											onClick={ this.clickHandler }
										>
											{ name }
										</ListGroupItem>									
									)
								})
							}
						</ListGroup> :
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