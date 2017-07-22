function result(state = [], action) {
  switch(action.type) {

  	case 'SAVE_KEYWORD' :

  		if ( state.includes( action.keyword ) ) {
  			var i = state.indexOf( action.keyword );

			return [
				...state.slice( 0,i ),
				...state.slice( i+1 )
			]

  		} else {

			return [
				...state,
				action.keyword
			]
		}

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