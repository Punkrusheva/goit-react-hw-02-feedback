import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import shortid from 'shortid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
   options.map((option) => (
    <button type='button'
       className={styles.button}
       key={shortid.generate()}
       onClick={() => onLeaveFeedback(option)}>
            {option.slice(0, 1).toUpperCase() + option.slice(1)}
    </button>)))
}

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array
};

export default FeedbackOptions;