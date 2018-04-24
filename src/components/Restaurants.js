import React, { Component } from 'react';
import { ListGroup,
				 ListGroupItem,
				 ButtonGroup,
				 Button,
				 Glyphicon,
				 Modal,
				 FormGroup,
				 FormControl,
				 ControlLabel,
				 HelpBlock,
				 Panel,
				 PanelGroup,
				 Table } from 'react-bootstrap';
import RestaurantList from './RestaurantList';
import './styles/Restaurants.css';

class Restaurants extends Component {
	constructor(props) {
    super(props);

    this.state = {
      show: false,
      value: ''
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleAddRestaurant = data => {
  	const { addRestaurant, restaurants, listFilter } = this.props;
  	let payload;
		payload = restaurants.concat(data);
		addRestaurant(payload);
		listFilter(data);
  }

  handleRemoveRestaurant = data => {
  	const { removeRestaurant, restaurants } = this.props;
  	const payload = restaurants.filter(restaurant => restaurant != data);
  	removeRestaurant(payload);
  }

	render(){
		const { 
			filteredList,
			restaurants,
			editRestaurant,
			submitSearch,
			searchResults
		} = this.props;
		const restaurantList = filteredList.length > 0 ? filteredList : restaurants;

		return (
			<div className="restaurantsDiv component_divs">
				<h2 id="restaurant_header" className="component_headers">Restaurants</h2>
				<ListGroup>
				{
					restaurantList.length > 0 ?
					<RestaurantList 
						favorites={ restaurants }
						restaurants={ restaurantList } 
						type="RestaurantList"
			      handleRemoveRestaurant={ this.handleRemoveRestaurant } 
			    /> :
					<h4>You don't have any favorite Restaurants!</h4>
				}
				</ListGroup>
				<Button bsStyle="primary" bsSize="large" onClick={ this.handleShow }>
          Find a New Place To Eat!
        </Button>
        <Modal show={ this.state.show } onHide={ this.handleClose }>
          <Modal.Header closeButton>
            <Modal.Title>Find A New Place To Eat!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
			        <FormGroup controlId="formBasicText">
			          <FormControl
			            type="text"
			            value={ this.state.value }
			            placeholder="Enter Search Query"
			            onChange={ this.handleChange }
			          />
			          <FormControl.Feedback />
			          <HelpBlock>Search for a new restaurant!</HelpBlock>
			          <Button bsStyle="primary" onClick={() => submitSearch(this.state.value) }>
			          	Search!
			          </Button>
			        </FormGroup>
			      </form>
			      { 
			      	searchResults.businesses &&
			      		<RestaurantList 
			      			favorites={ restaurants }
			      			restaurants={ searchResults.businesses }
			      			type="SearchResults"
			      			handleAddRestaurant={ this.handleAddRestaurant }
		      			/>
 						}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
			</div>
		);
	}
}

export default Restaurants;