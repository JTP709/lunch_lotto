export const pickWinner = payload => {
  return {
    type: 'PICK_WINNER',
    payload
  }
}

export const submitSearch = payload => {
  //(dispatch, getState, getFirebase) => {
  console.log('submitSearch: ',payload);
  return dispatch => {
    //const firebase = getFirebase();
    dispatch(resetSearchResults());
    fetch(`http://localhost:8080/search?query=${payload}`)
      .then(response => {
        console.log('response:',response);
        if (!response.ok) {
          alert('API call returned an error.');
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        //dispatch(addSearchResults(data));
        dispatch(restaurantSearch(data));
      })
  }
}

export const addSearchResults = payload =>
  (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .push('searchResults', payload.businesses)
      .then(() => {
        dispatch(restaurantSearch(payload))
      })
  };

export const restaurantSearch = payload => {
  return {
    type: 'RESTAURANT_SEARCH',
    payload
  }
}

export const resetSearchResults = () => {
  return {
    type: 'RESET_SEARCH_RESULTS'
  }
}

export const setFilter = data => {
  console.log('init');
  let payload = [];
  data.categories.map(category => {
    console.log('category: ',category);
    if(!payload.includes(category.title)) {
      console.log('inside if');
      const catTitle = category.title;
      payload.concat({ catTitle: true })
    }
  })
  return {
    type: 'SET_FILTER',
    payload
  }
}

export const listFilter = () => {
  return {
   	type: 'LIST_FILTER'
  }
}

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  }
}

export const addRestaurant = payload => {
  return {
    type: 'ADD_RESTAURANT',
    payload
  }
}

export const editRestaurant = payload => {
  return {
    type: 'EDIT_RESTAURANT',
    payload
  }
}

export const removeRestaurant = payload => {
  return {
    type: 'REMOVE_RESTAURANT',
    payload
  }
}
