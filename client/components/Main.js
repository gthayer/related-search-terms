import React from 'react';
import { Link } from 'react-router';
import css from './style.scss';

const Main = React.createClass({
  render() {
    return (
      <div className="content">
        <h1>
          <Link to="/">Keyword Search</Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
