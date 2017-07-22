import React from 'react';
import { Link } from 'react-router';
import css from './style.scss';
import Results from './Results';
import Saved from './Saved';
import Download from './Download';

const Main = React.createClass({
  render() {
    return (
      <div className="content">
        <h1>Keyword Search</h1>
        
        {React.cloneElement({...this.props}.children, {...this.props})}

        <Results {...this.props} />

        <Saved {...this.props} />

        <Download {...this.props} />

      </div>
    )
  }
});

export default Main;
