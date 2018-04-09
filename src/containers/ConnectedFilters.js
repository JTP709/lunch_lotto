import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { setFilter, 
         listFilter, 
         resetFilter } from '../actions/actionCreators';

const mapStateToProps = (state) => {
  return {
  	restaurants: state.restaurants,
    filters: state.filters,
    filteredList: state.filteredList 
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
