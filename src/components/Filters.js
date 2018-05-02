import React, { Component } from 'react';
import FilterButton from './FilterButton';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { setFilterUtil, capitalizeKeyWord } from '../utils/utilities';
import './styles/Filters.css';

class Filters extends Component {

	handleClick = name => {
		const { filters, setFilter, restaurantFilter } = this.props;
		let newFilters = { ...filters };
		newFilters[name] = !newFilters[name];
		setFilter(newFilters);
		restaurantFilter();
	}

	render(){
		const { filters, resetFilter } = this.props;
		return(
			<div className="filtersDiv component_divs">
				<h2 id="filters_header" className="component_headers">Filters</h2>
				{
					Object.keys(filters).length > 0?
						<ListGroup key={ `${'filter'}_btn_group` }>
							{
								Object.keys(filters).map(category => {
									const toggle = filters[category] ? false : true;
									return (
										<ListGroupItem
											key={ `${category}`}
											className={ `${category}_filterBtn`}
											onClick={ ()=> this.handleClick(category) }
											active={ toggle }
										>
											{ category }
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