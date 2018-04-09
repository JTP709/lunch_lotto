import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './styles/Filters.css';

class Filters extends Component {

	handleFilterClick = (key,subkey) => {
		this.props.setFilter(key,subkey);
	}

	render(){
		return(
			<div className="filtersDiv component_divs">
				<h2 id="filters_header" className="component_headers">Filters</h2>
				{
					Object.keys(this.props.filters).map(key => (
						<div key={`${key}_btn_group`}>
							<h4>{key.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")}:</h4>
							<ButtonGroup>
								{
									Object.keys(this.props.filters[key]).map(subkey => {
										let highlight = '';
										this.props.filters[key][subkey] 
											? highlight = 'active_filter' 
											: highlight = 'inactive_filter'
										return (
											<Button key={`${subkey}_btn`} className={`${highlight} ${subkey}_btn`} onClick={()=> { this.handleFilterClick(key,subkey) }}>
												{subkey.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")}
											</Button>)
									})
								}
							</ButtonGroup>
						</div>
					))
				}
				<hr/>
				<Button onClick={()=>{this.props.resetFilter()}}>
					Reset All
				</Button>
			</div>
		)
	}
}

export default Filters;