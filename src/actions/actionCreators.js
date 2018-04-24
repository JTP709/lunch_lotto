export const pickWinner = payload => {
  return {
    type: 'PICK_WINNER',
    payload
  }
}

export const submitSearch = payload => {
  //(dispatch, getState, getFirebase) => {
  return dispatch => {
    //const firebase = getFirebase();
    dispatch(resetSearchResults());
    fetch(`http://localhost:8080/search?query=${payload}`)
      .then(response => {
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

export const listFilter = data => {
  let payload = [];
  data.categories.map(category => {
    if(!payload.includes(category.title)) {
      const catTitle = category.title;
      let obj = {};
      obj[catTitle] = true;
      payload.push(obj);
    }
  })
  return {
    type: 'LIST_FILTER',
    payload
  }
}

export const setFilter = payload => {
  return {
   	type: 'SET_FILTER',
    payload
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
