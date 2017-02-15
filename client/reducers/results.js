function result(state = [], action) {
  switch(action.type) {

  	case 'SAVE_KEYWORD' :

		return [
			...state,
			action.keyword
		]

  	case 'REMOVE_KEYWORD' :

		return [
			...state.slice( 0,action.i ),
			...state.slice( action.i+1 )
		]

	default:
	  return state;
  }
}

export default result;