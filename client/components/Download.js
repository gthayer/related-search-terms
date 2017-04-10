import React from 'react';

const Download = React.createClass({

  render() {

  		if ( this.props.results.length > 0 ) {
			return (
				<div className="download-keyword">

			  		<button onClick={ e => this.props.download_csv(this.props.results) } className="download-csv">Download Saved Search Terms</button>

				</div>
			)
  		} else {
  			return (
  				<div className="download-keyword"></div>
  			)
  		}
  }
});

export default Download;
