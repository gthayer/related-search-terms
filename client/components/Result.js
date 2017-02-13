import React from 'react';

const Result = React.createClass({

  render() {

  	const { result, i } = this.props;

	return (
	  <div className="search-result">

	  	{ result }

	  </div>
	)
  }
});

export default Result;
