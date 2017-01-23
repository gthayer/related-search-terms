function search(state = [], action) {
  switch(action.type) {
    case 'KEYWORD_SEARCH' :
    	console.log('keyword search');
      return state;

    case 'UPDATE_SEARCH' :
    	console.log(action);
		return {
			...state,
			keyword: action.value
		}
    	return state;

    default:
      return state;
  }
}

export default search;