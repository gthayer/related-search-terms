function search(state = [], action) {
  switch(action.type) {

  	case 'RECEIVE_POSTS' :

		return {
			...state,
			results: action.results,
			init: false
		}

	case 'UPDATE_SEARCH' :
		return {
			...state,
			keyword: action.value
		}

	case 'SEARCH_INIT' :
		return {
			...state,
			results: [],
			init: true
		}

	case 'GET_LOCATION' :
	console.log('GET_LOCATION');
		return {
			...state,
			results: [],
			location: 'test'
		}

	default:
	  return state;
  }
}

export default search;