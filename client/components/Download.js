import React from 'react';

const Download = React.createClass({

	render() {

		if ( this.props.results.length > 0 ) {
			return (
				<div className="download-keyword">

					<div className="wrap">
						<button onClick={ e => this.props.download_csv(this.props.results) } className="download-csv">Download and Export CSV File</button>
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

export default Download;
