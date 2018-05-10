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
				 Table,
} from 'react-bootstrap';
import './styles/Restaurants.css';

class RestaurantList extends Component {

	render(){
		const { 
			favorites,
			restaurants,
			type,
			handleAddRestaurant,
			handleRemoveRestaurant
		} = this.props;
		return (
			<div>
  			<PanelGroup id={ `${type}-panel-group` } accordion>
  			{
					restaurants.map(restaurant => {
						let included = false;
						favorites.map(favorite=>{
							if(favorite.id === restaurant.id)
								included = true
						});
						return(
					  <Panel key={ restaurant.id } eventKey={ restaurants.indexOf(restaurant)+1 }>
		          <Panel.Heading id={ `${restaurant.id}-panel-heading` }>
		            <Panel.Title toggle>
		              { restaurant.name }
		            </Panel.Title>
		          </Panel.Heading>
		          <Panel.Collapse id={ `${restaurant.id}-panel-collapse` }>
		            <Panel.Body collapsible>
			            <Table striped bordered condensed hover>
									  <tbody>
									    <tr>
									      <td>Phone:</td>
									      <td>{ restaurant.display_phone }</td>
									    </tr>
									  </tbody>
									  <tbody>
									  	<tr>
									      <td>Price:</td>
									      <td>{ restaurant.price }</td>
									    </tr>
									  </tbody>
									  <tbody>
									  	<tr>
									      <td>Website:</td>
									      <td><a href={ restaurant.url }>Website Link</a></td>
									    </tr>
									  </tbody>
									  <tbody>
									  	<tr>
									      <td>Address:</td>
									      <td>
													{ restaurant.location.address1 }<br/>
									        { restaurant.location.city }, { restaurant.location.state } { restaurant.location.zip_code }
								        </td>
									    </tr>
									  </tbody>
									</Table>
									{
										type === "RestaurantList" ?
										<Button onClick={ ()=>{ handleRemoveRestaurant(restaurant) } }>
											Remove From Favorites
										</Button> : included ?
										<h4>Restaurant is already in your Favorites</h4> :
										<Button onClick={ ()=>{ handleAddRestaurant(restaurant) } }>
											Add to Favorites
										</Button>
									}
		            </Panel.Body>
		          </Panel.Collapse>
		        </Panel>
		        )}
	        )}
				</PanelGroup>
	  	</div>
	  )
	}
}

export default RestaurantList;
