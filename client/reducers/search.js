function search(state = [], action) {
  switch(action.type) {

  	case 'RECEIVE_POSTS' :

		return {
			...state,
			results: action.results
		}

  		return state;

	case 'UPDATE_SEARCH' :
		return {
			...state,
			keyword: action.value
		}

	default:
	  return state;
  }
}

export default search;