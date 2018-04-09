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
      global_fusion: true,
      cafe: true,
      breakfast: true,
      BBQ: true,
      indian: true,
      traditional: true
    },
    price: {
      $: true,
      $$: true,
      $$$: true
    },
    distance: {
      walking: true,
      driving: true,
      streetcar: true,
      flying: true
    },
    diet: {
      no_vegetarian: true,
      no_gluten_free: true,
      else: true
    }
  },
  filteredList: testData.restaurants
}

export default initialState;