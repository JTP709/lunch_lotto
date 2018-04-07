import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import './Restaurants.css';

class Restaurants extends Component {

	handleFilterClick = (key,subkey) => {
		this.props.setFilter(key,subkey);
	}

	render(){
		let restaurantList = [];
			this.props.filteredList 
			? restaurantList = this.props.filteredList 
			: restaurantList = this.props.restaurants;
		return (
			<div className="restaurantsDiv">
				<h1>Restaurants</h1>
				<ListGroup>
				{
					restaurantList.map(restaurant => (
					  <ListGroupItem key={restaurant.name} href={restaurant.url}>
					  	{restaurant.name}
					  	<div className="restaurantListBtnGrp">
							  <Glyphicon onClick={()=> {this.props.editRestaurant()}} glyph="pencil" />
							  <Glyphicon onClick={()=> {this.props.deleteRestaurant()}} glyph="remove" />
							</div>
					  </ListGroupItem>
					))
				}
				</ListGroup>
				<h2>Filters:</h2>
				{
					Object.keys(this.props.filters).map(key => (
						<div key={`${key}_btn_group`}>
							<h3>{key.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")}:</h3>
							<ButtonGroup>
								{
									Object.keys(this.props.filters[key]).map(subkey => {
										let highlight = '';
										this.props.filters[key][subkey] 
											? highlight = 'inactive_filter' 
											: highlight = 'active_filter'
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
		);
	}
}

export default Restaurants;