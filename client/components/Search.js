import React from 'react';

const Search = React.createClass({

	getInitialState() {
		return { keyword : '' };
	},

  render() {

	const { keyword } = this.props.search;

	return (
	  <div className="search-area wrap">
		<form onSubmit={ e => this.props.keyword_search( keyword, e ) }>
			<input value={ keyword } onChange={ e => this.props.update_search( e.target.value) } type="text" name="keyword" />
			<input type="submit" value="Search" />
		</form>
	  </div>
	)
  }
});

export default Search;
