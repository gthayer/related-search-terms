import React from 'react';

const Saved = React.createClass({

  render() {

  	const { results, i } = this.props;

	return (
	  <div className="saved-keywords">

		{ results.map((result, i) => <div className="saved-keyword" key={i} ><span className="keyword">{result}</span><span onClick={ e => this.props.remove_keyword( i ) } className="remove-btn">Remove</span></div> ) }

	  </div>
	)
  }
});

export default Saved;
