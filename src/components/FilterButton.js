import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './styles/Filters.css';

class FilterButton extends Component{
	constructor(){
		super();
		this.state={
			active: 'active_filter'
		}
	}

	componentWillReceiveProps(nextProps){
		let newFilter = '';
		nextProps.active ? newFilter='active_filter' : newFilter='inactive_filter'
		this.setState({ active: newFilter })
	}

	render(){
		return(
		<Button
			key={ `${this.props.filterSubkey}_btn` }
			className={ `${this.state.active} ${this.props.filterSubkey}_btn` }
			onClick={()=> { this.props.clickHandler(this.props.filterKey,this.props.filterSubkey) }}
		>
			{ this.props.name }
		</Button>
		)
	}
}

export default FilterButton