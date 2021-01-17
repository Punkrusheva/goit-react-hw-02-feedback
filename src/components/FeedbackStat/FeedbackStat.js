import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackStat.module.css';
import shortid from 'shortid';

function FeedbackStat({ options, state, total, positiveFeedback }) {
  return (
    <>
      {options.map((option) => (
        <p key={shortid.generate()} className={styles.stat}>
          {option.slice(0, 1).toUpperCase() + option.slice(1)} : {state[option]}
        </p>
      ))}
        <div>
          <p className={styles.stat}>Total: {total}</p>
          <p className={styles.stat}>Positive feedback: {positiveFeedback}%</p>
      </div>
      </>
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