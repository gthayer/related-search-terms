// Main search function
export function keyword_search( keyword, e ) {

	e.preventDefault();
	return {
		type: 'KEYWORD_SEARCH',
		keyword
	}
}

export function update_search( keyword, value ) {
	return {
		type: 'UPDATE_SEARCH',
		keyword,
		value
	}
}