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

class RestaurantList extends Component {

	render(){
		const { restaurants, type } = this.props;
		return (
			<div>
  			<PanelGroup id={ `${type}-panel-group` } accordion>
  			{
					restaurants.map(result => {
						return(
					  <Panel key={ result.id } eventKey={ restaurants.indexOf(result)+1 }>
		          <Panel.Heading id={ `${result.id}-panel-heading` }>
		            <Panel.Title toggle>
		              { result.name }
		            </Panel.Title>
		          </Panel.Heading>
		          <Panel.Collapse id={ `${result.id}-panel-collapse` }>
		            <Panel.Body collapsible>
			            <Table striped bordered condensed hover>
									  <tbody>
									    <tr>
									      <td>Phone:</td>
									      <td>{ result.display_phone }</td>
									    </tr>
									  </tbody>
									  <tbody>
									  	<tr>
									      <td>Price:</td>
									      <td>{ result.price }</td>
									    </tr>
									  </tbody>
									  <tbody>
									  	<tr>
									      <td>Website:</td>
									      <td><a href={ result.url }>Website Link</a></td>
									    </tr>
									  </tbody>
									  <tbody>
									  	<tr>
									      <td>Address:</td>
									      <td>
													{ result.location.address1 }<br/>
									        { result.location.city }<br/>
									        { result.location.state }<br/>
									        { result.location.zip_code }<br/>
								        </td>
									    </tr>
									  </tbody>
									</Table>
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
