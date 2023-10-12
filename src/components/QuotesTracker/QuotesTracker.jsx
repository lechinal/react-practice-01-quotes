import React, { useState } from 'react';
import styles from './QuotesTracker.module.css';
import QuotesObj from 'data/data';

function QuotesTracker({ readQuotes, remainingQuotes, percentageRead }) {
  return (
    <div className={styles.trackerBox}>
      <p>
        {readQuotes} / {QuotesObj.length} quotes read ({percentageRead}%)
      </p>
      <p>{remainingQuotes} quotes left</p>
    </div>
  );
}

export default QuotesTracker;
