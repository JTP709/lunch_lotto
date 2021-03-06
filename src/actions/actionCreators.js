export const pickWinner = () => {
  return {
    type: 'PICK_WINNER'
  }
}

export const listFilter = () => {
  return {
   	type: 'LIST_FILTER'
  }
}

export const setFilter = (key, value) => {
	return {
		type: 'SET_FILTER',
		payload: {key, value}
	}
}

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  }
}

export const addRestaurant = () => {
  return {
    type: 'ADD_RESTAURANT'
  }
}

export const editRestaurant = () => {
  return {
    type: 'EDIT_RESTAURANT'
  }
}

export const deleteRestaurant = () => {
  return {
    type: 'DELETE_RESTAURANT'
  }
}
