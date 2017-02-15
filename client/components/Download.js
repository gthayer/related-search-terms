import React from 'react';

const Download = React.createClass({

  render() {

  		if ( this.props.results.length > 0 ) {
			return (
				<div className="download-keyword">

			  		<button className="download-csv">Download</button>

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
