import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import './styles/GoogleMap.css';
 
export class GoogleMap extends Component {
  render() {
    const style = {
      width: '95%',
      height: '75%'
    }
    return (
      <div className="mapDiv component_divs">
        <h2 id="map_header" className="component_headers">Map</h2>
        <Map 
          google={ this.props.google }
          zoom={ 8 }
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          style={ style }
        >
   
          <Marker
            title={'tool tip'}
            name={'middle earth'}
            position={{
              lat: 40.854885,
              lng: -88.081807
            }}
          />

        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(GoogleMap)