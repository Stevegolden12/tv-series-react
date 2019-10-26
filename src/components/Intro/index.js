import React from 'react';
import PropTypes from 'prop-types';

const Intro = props => (
  <p className="App-intro">
    {props.message}
   </p>
);

Intro.propTypes = {
  message: PropTypes.array,
}

export default Intro;