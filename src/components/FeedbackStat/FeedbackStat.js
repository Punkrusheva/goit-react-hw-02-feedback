import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackStat.module.css';

function FeedbackStat({ options, state }) {
  return (
  options.map((option) => (
            <div className={styles.option}>{option.slice(0, 1).toUpperCase() + option.slice(1)} : {state[option]}</div>
  ))
  
  )
  
}

FeedbackStat.defaultProps = {
  options: [],
  state: '',
};

FeedbackStat.propTypes = {
  options: PropTypes.array,
  state: PropTypes.object,
};

export default FeedbackStat;