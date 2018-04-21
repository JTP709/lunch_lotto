import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import Restaurants from '../components/Restaurants';
import { pickWinner,
         addRestaurant,
         editRestaurant,
         deleteRestaurant,
         restaurantSearch,
         submitSearch } from '../actions/actionCreators';
import { getRestaurants, getSearchInput, getFilteredList, getSearchResults } from '../reducers/appReducers';

const mapStateToProps = (state) => {
  return {
  	restaurants: getRestaurants(state),
    searchInput: getSearchInput(state),
    filteredList: getFilteredList(state),
    searchResults: getSearchResults(state)
  }
}

const mapDispatchToProps = {
  pickWinner,
  addRestaurant,
  editRestaurant,
  deleteRestaurant,
  restaurantSearch,
  submitSearch
}

// export const ConnectedRestaurants = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Restaurants)

export const ConnectedRestaurants = compose(
  firebaseConnect((props) => {
    return [
      'devEnvironment_1'
    ]
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Restaurants)
