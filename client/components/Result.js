import React from 'react';

const Result = React.createClass({

  render() {

  	const { result, i } = this.props;

	return (
	  <div className="search-result">

	  	<span onClick={ e => this.props.keyword_search( result ) } className="result">{ result }</span>

	  	<span onClick={ e => this.props.save_keyword( result ) } className="save-btn">save</span>

	  </div>
	)
  }
});

export default Result;
