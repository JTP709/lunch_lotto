import { testRestaurants, testFilters } from '../testData';

const initialState = {
  restaurants: testRestaurants.restaurants,
  winner: 'Push the Button!', 
  searchInput: '',
  filteredList: [],
  searchResults: [],
  filters: testFilters.filters
}

export default initialState;