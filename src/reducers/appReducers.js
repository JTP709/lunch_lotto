//TODO: move to redux
import {testData} from '../testData';

const initialState = {
  restaurants: testData.restaurants,
  winner: 'Push the Button!', 
  filters:{
    Type: {
      Sushi: true,
      Za: true,
      Hamburgers: true,
      MexicanAsian: true,
      Cafe: true
    },
    Price: {
      $: true,
      $$: true,
      $$$: true
    },
    Distance: {
      Walking: true,
      Driving: true,
      Flying: true
    },
  },
  filteredList: testData.restaurants
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PICK_WINNER':
      let winner = {};
      if (state.filteredList.length === 0) {
        return state;
      } else {
        const index = () => Math.floor(Math.random()*state.filteredList.length)
        winner = state.filteredList[index()];
        if (winner.name === state.winner) {
          winner = state.filteredList[index()]
        }
      }
      return {
        ...state,
        winner: winner.name,
      };
    case 'SET_FILTER':
      const newState = {...state};
      const toggle = newState.filters[action.payload.key][action.payload.value];
      newState.filters[action.payload.key][action.payload.value] = toggle ? false : true;
      const filteredList = newState.restaurants.filter(restaurant => {
        for(let key in restaurant.filters) {
          // console.log('\n')
          // console.log(restaurant.name);
          // console.log('key: ', key);
          // console.log('value: ', newState.filters[key][restaurant.filters[key]]);
          // console.log('restaurant: ', restaurant);
          if (!newState.filters[key][restaurant.filters[key]]) {
            // console.log('Restaurant: ', restaurant.name);
            // console.log('FALSE')
            return false;
          }
        }
        // console.log('Restaurant: ', restaurant.name);
        // console.log('TRUE')
        return true;
      });

      return {
        ...newState,
        filteredList
      };
    case 'RESET_FILTER':
      return {
        ...state,
        filters: initialState.filters,
        filteredList: state.restaurants
      }
    default:
      return state;
  }
}

export default appReducer;
