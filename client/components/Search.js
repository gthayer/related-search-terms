import React from 'react';

const Search = React.createClass({

	getInitialState() {
		return { keyword : 'gary' };
	},

  render() {

	const { keyword } = this.props.search;

	return (
	  <div className="search-area">
		<form onSubmit={ e => this.props.keyword_search( keyword, e ) }>
			<input value={ keyword } onChange={ e => this.props.update_search( e.target.value) } type="text" name="keyword" />
			<input type="submit" value="submit" />
		</form>
	  </div>
	)
  }
});

export default Search;
