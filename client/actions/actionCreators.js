// Main search function
export function receive_results( results ) {
	return {
		type: 'RECEIVE_POSTS',
		results
	}
}

export function search_init( results ) {
	return {
		type: 'SEARCH_INIT',
		results
	}
}

export function update_search( value ) {
	return {
		type: 'UPDATE_SEARCH',
		value
	}
}

export function getLocation( results ) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getLocationComplete);
	}
}

export function getLocationComplete( position ) {
	savePosition( position.coords );
}

export function savePosition( coords ) {
    return {
    	type: 'GET_LOCATION',
    	lat: coords.latitude,
    	lng: coords.longitude
    }
}

export function keyword_search( keyword, e ) {

	if ( typeof e != 'undefined' ) {
		e.preventDefault();		
	}

	if ( typeof keyword != 'undefined' ) {

		let slug = keyword.replace(/\s+/g, '-').toLowerCase();
		update_search(keyword);

		return (dispatch, getState) => {

			fetch('../../api/keyword-search.php/' + slug)
			.then(function(resp) {
				resp.json().then(function(json) {
					return (
						dispatch( update_search(keyword) ),
						dispatch( receive_results(json) )
					)
				})
			});
		}
	} else {
		return (
			getLocation(),
			search_init([])
		)
	}
}

export function download_csv( saved ) {

	return {
		type: 'DOWNLOAD_CSV',
		saved
	}

}

export function save_keyword( keyword ) {

	return {
		type: 'SAVE_KEYWORD',
		keyword
	}
}

export function remove_keyword( i ) {

	return {
		type: 'REMOVE_KEYWORD',
		i
	}
}