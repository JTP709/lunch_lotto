import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import Filters from '../components/Filters';
import { 
  setFilter, 
  listFilter, 
  resetFilter 
} from '../actions/actionCreators';
import { getRestaurants, getFilteredList, getFilters } from '../reducers/appReducers';

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    filteredList: state.filteredList,
    filters: state.filters
  }
}

const mapDispatchToProps = {
  setFilter,
  listFilter,
  resetFilter
}

export const ConnectedFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

// export const ConnectedFilters = compose(
//   firebaseConnect((props) => {
//     return [
//       'devEnvironment_1'
//     ]
//   }),
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )(Filters)
