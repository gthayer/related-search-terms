import React from 'react';
import { Link } from 'react-router';
import css from './style.scss';
import Results from './Results';
import Saved from './Saved';
import Download from './Download';
import Footer from './Footer';

const Main = React.createClass({
  render() {
    return (
      <div className="content">
        <h1>Related Search Term Finder</h1>

        <p className="description">
          Search Google for related search terms and export them to CSV
        </p>
        
        {React.cloneElement({...this.props}.children, {...this.props})}

        <Results {...this.props} />

        <Saved {...this.props} />

        <Download {...this.props} />

        <Footer/>

      </div>
    )
  }
});

export default Main;
