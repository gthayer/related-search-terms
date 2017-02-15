function search(state = [], action) {
  switch(action.type) {

  	case 'RECEIVE_POSTS' :

		return {
			...state,
			results: action.results
		}

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