import React from 'react';

const Saved = React.createClass({

	render() {

		const { results, keyword, i } = this.props;

		if ( results.length > 0 ) {
			return (
				<div className="saved-keywords clearfix">

					<div className="wrap">

						<h3>My Saved Keywords</h3>

						{ results.map((result, i) => <div className="saved-keyword" key={i} ><span className="keyword">{result}</span><span onClick={ e => this.props.remove_keyword( i ) } className="remove-btn">Remove</span></div> ) }

					</div>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
});

export default Saved;
