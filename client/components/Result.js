import React from 'react';

const Result = React.createClass({

  render() {

  	var savedClass;
  	const { result, results, i } = this.props;

  	if ( results.includes(result) ) {
  		savedClass = 'saved search-result';
  	} else {
  		savedClass = 'search-result';
  	}

	return (
	  <div className={savedClass}>

	  	<span onClick={ e => this.props.keyword_search( result ) } className="result">{ result }</span>

	  	<span onClick={ e => this.props.save_keyword( result ) } className="save-btn">save</span>

	  </div>
	)
  }
});

export default Result;
