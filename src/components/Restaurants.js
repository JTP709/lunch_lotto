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

	render(){
		const { 
			filteredList,
			restaurants,
			editRestaurant,
			deleteRestaurant,
			submitSearch,
			searchResults
		} = this.props;
		const restaurantList = filteredList ? filteredList : restaurants;

		return (
			<div className="restaurantsDiv component_divs">
				<h2 id="restaurant_header" className="component_headers">Restaurants</h2>
				<ListGroup>
				{
					restaurantList ?
					<RestaurantList restaurants={ restaurantList } type="RestaurantList" /> :
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
			      	searchResults ? <RestaurantList restaurants={ searchResults.businesses } type="SearchResults" /> : null
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