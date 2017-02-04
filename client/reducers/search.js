function search(state = [], action) {
  switch(action.type) {
	case 'KEYWORD_SEARCH' :
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