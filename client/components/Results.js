import React from 'react';
import Result from './Result';

const Results = React.createClass({

  render() {

  	const { results } = this.props.search;

		return (
		  <div className="search-results clearfix">

		  	{ results.map((result, i) => <Result {...this.props} key={i} i={i} result={result} /> ) }

		  </div>
		)
  }
});

export default Results;
