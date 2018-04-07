import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants';
import { pickWinner, setFilter, listFilter, resetFilter } from '../actions/actionCreators';

const mapStateToProps = (state) => {
  return {
  	restaurants: state.restaurants,
    filters: state.filters,
    filteredList: state.filteredList 
  }
}

const mapDispatchToProps = {
  pickWinner,
  setFilter,
  listFilter,
  resetFilter
}

export const ConnectedRestaurants = connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants)
