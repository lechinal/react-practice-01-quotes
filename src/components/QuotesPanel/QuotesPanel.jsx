import React from 'react';
import styles from './QuotesPanel.module.css';

function QuotesPanel({ quote }) {
  return (
    <div className={styles.quoteBox}>
      <div className={styles.quoteAuthorImageBox}>
        <img
          className={styles.quoteAuthorImage}
          src={process.env.PUBLIC_URL + quote.authorImage}
          alt={quote.author}
        />
      </div>
      <div className={styles.quoteTextBox}>
        <p className={styles.quoteText}>{quote.quote}</p>
        <p className={styles.quoteAuthor}>{quote.author}</p>
      </div>
    </div>
  );
}

export default QuotesPanel;
