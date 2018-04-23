import {testData} from '../testData';

const initialState = {
  restaurants: testData.restaurants,
  winner: 'Push the Button!', 
  searchInput: '',
  filteredList: [],
  searchResults: [],
  filters:[]
}

export default initialState;