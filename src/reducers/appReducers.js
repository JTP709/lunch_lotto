//TODO: hook up firebase
//TODO: make pure functions
import initialState from './initialState';

export const getRestaurants = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.restaurants : undefined;
export const getFilteredList = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.filteredList : undefined;
export const getSearchInput = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.searchInput : '';
export const getSearchResults = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.searchResults : undefined;
export const getWinner = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.winner : 'Press the Button!';
export const getFilters = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.filters : undefined;

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PICK_WINNER':
      return {
        ...state,
        winner: action.payload
      };
    case 'SET_FILTER':
      return {
        ...state,
        filteredList: action.payload
      };
    case 'RESET_FILTER':
      return initialState;
    case 'RESTAURANT_SEARCH':
      return {
        ...state,
        searchResults: action.payload
      };
    case 'RESET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: initialState.searchResults
      };
    default:
      return state;
  }
}

export default appReducer;
