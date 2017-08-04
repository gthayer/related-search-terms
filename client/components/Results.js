import React from 'react';
import Result from './Result';

const Results = React.createClass({

	render() {

		const { results, init } = this.props.search;

		if ( results.length > 0 ) {
			return (
				<div className="search-results clearfix">

					<div className="wrap">
						{ results.map((result, i) => <Result {...this.props} key={i} i={i} result={result} /> ) }
					</div>

				</div>
			)
		} else if ( ! init ) {
			return (
				<div className="search-results clearfix">No Results</div>
			)
		} else {
			return (
				<div></div>
			)	
		}
	}
});

export default Results;
