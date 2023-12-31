import React, { useRef } from 'react';
import styles from './QuotesInteraction.module.css';
import Button from 'components/Button/Button';

import { BiCopy, BiReset } from 'react-icons/bi';
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr';

function QuotesInteraction({
  showNextQuote,
  showPreviousQuote,
  quote,
  resetToFirstQuote,
}) {
  const quoteRef = useRef(null);

  const copyToClipboard = () => {
    if (quoteRef.current) {
      quoteRef.current.select();
      try {
        navigator.clipboard.writeText(quote);
        alert('Citatul a fost copiat în clipboard.');
      } catch (err) {
        alert('Nu s-a putut copia citatul în clipboard.');
      }
    }
  };

  return (
    <div className={styles.BtnsBox}>
      <div className={styles.leftBtns}>
        <Button bgColor="#7950f2" onClick={showPreviousQuote}>
          <GrCaretPrevious /> <span className={styles.text}>Previous</span>
        </Button>
        <Button bgColor="#7950f2" onClick={showNextQuote}>
          <span className={styles.text}>Next</span> <GrCaretNext />
        </Button>
      </div>
      <div className={styles.rightBtns}>
        <Button bgColor="#7950f2" onClick={copyToClipboard}>
          <span className={styles.text}>Copy Quote</span> <BiCopy />
        </Button>
        <Button bgColor="#7950f2" onClick={resetToFirstQuote}>
          <span className={styles.text}>Reset to First</span> <BiReset />
        </Button>
      </div>
      <div style={{ display: 'none' }}>
        <textarea ref={quoteRef} readOnly={true} value={quote}></textarea>
      </div>
    </div>
  );
}

export default QuotesInteraction;
