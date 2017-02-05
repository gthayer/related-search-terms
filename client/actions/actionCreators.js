// Main search function
export function receive_results( results ) {
	return {
		type: 'RECEIVE_POSTS',
		results
	}
}

export function update_search( keyword, value ) {
	return {
		type: 'UPDATE_SEARCH',
		keyword,
		value
	}
}

export function keyword_search( keyword, e ) {

	if ( typeof e != 'undefined' ) {
		e.preventDefault();		
	}

	if ( typeof keyword != 'undefined' ) {

		return (dispatch, getState) => {

			fetch('../../api/keyword-search.php/' + keyword)
			.then(function(resp) {
				resp.json().then(function(json) {
					return dispatch( receive_results(json) );
				})
			});
		}
	} else {
		return receive_results();
	}
}
