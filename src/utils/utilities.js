export const pickWinnerUtil = (filteredList, currentWinner) => {
	let winner = {};
	if (filteredList.length === 0) {
	  return 'Push the Button!';
	} else {
	  const index = () => Math.floor(Math.random()*filteredList.length)
	  winner = filteredList[index()];
	  if (winner.name === currentWinner) {
	    winner = filteredList[index()]
	  }
	}
	return winner.name
}

export const setFilterUtil = (filters, restaurants, key, value) => {
  filters[key][value] = filters[key][value] ? false : true;
  return restaurants.filter(restaurant => {
    for(let filterKey in restaurant.filters) {
      if (!filters[key][restaurant.filters[key]])
        return false
    }
    return true
  });
}

export const capitalizeKeyWord = word => {
	return word.split('_')
		.map(word => word[0].toUpperCase()+word.slice(1))
		.join(" ")
}

