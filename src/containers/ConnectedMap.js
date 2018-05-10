import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import GoogleMap from '../components/Map';
import { 
  pickWinner,
  addRestaurant,
  editRestaurant,
  removeRestaurant,
  restaurantSearch,
  submitSearch,
  listFilter
} from '../actions/actionCreators';
import { 
  getRestaurants,
  getSearchInput,
  getFilteredList,
  getSearchResults
} from '../reducers/appReducers';

const mapStateToProps = (state) => {
  return {
  	restaurants: state.restaurants,
    filteredList: state.filteredList,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = {
  pickWinner,
  addRestaurant,
  editRestaurant,
  removeRestaurant,
  restaurantSearch,
  submitSearch,
  listFilter
}

export const ConnectedMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap)

// export const ConnectedRestaurants = compose(
//   firebaseConnect((props) => {
//     return [
//       'devEnvironment_1'
//     ]
//   }),
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )(Restaurants)