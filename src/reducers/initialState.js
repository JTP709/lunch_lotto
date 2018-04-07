//TODO: move to redux
import {testData} from '../testData';

const initialState = {
  restaurants: testData.restaurants,
  winner: 'Push the Button!', 
  filters:{
    type: {
      sushi: true,
      za: true,
      hamburgers: true,
      mexican_asian: true,
      cafe: true
    },
    price: {
      $: true,
      $$: true,
      $$$: true
    },
    distance: {
      walking: true,
      driving: true,
      flying: true
    },
    diet: {
      not_vegetarian: true,
      not_gluten_free: true,
      all: true
    }
  },
  filteredList: testData.restaurants
}

export default initialState;