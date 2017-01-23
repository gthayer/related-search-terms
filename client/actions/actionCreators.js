// Main search function
export function keyword_search( e, keyword ) {
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