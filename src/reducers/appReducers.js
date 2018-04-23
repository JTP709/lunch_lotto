//TODO: hook up firebase
//TODO: make pure functions
import initialState from './initialState';

// export const getRestaurants = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.restaurants : [];
// export const getFilteredList = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.filteredList : [];
// export const getSearchInput = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.searchInput : '';
// export const getSearchResults = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.searchResults : [];
// export const getWinner = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.winner : 'Press the Button!';
// export const getFilters = (state) => state.firebase.data.devEnvironment_1 ? state.firebase.data.devEnvironment_1.filters : [];

export const getRestaurants = (state) => state.restaurants ? state.restaurants : [];
export const getFilteredList = (state) => state.filteredList ? state.filteredList : [];
export const getSearchInput = (state) => state.searchInput ? state.searchInput : '';
export const getSearchResults = (state) => state.searchResults ? state.searchResults : [];
export const getWinner = (state) => state.winner ? state.winner : 'Press the Button!';
export const getFilters = (state) => state.filters ? state.filters : [];

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
        filters: action.payload
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
    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: action.payload
      }
    case 'REMOVE_RESTAURANT':
      return {
        ...state,
        restaurants: action.payload
      }
    default:
      return state;
  }
}

export default appReducer;
