import React, { useState } from 'react';
import QuotesPanel from 'components/QuotesPanel/QuotesPanel';
import QuotesInteraction from 'components/QuotesInteraction/QuotesInteraction';
import QuotesTracker from 'components/QuotesTracker/QuotesTracker';
import SkillShowcase from './components/SkillShowcase/SkillShowcase';
import QuotesObj from './data/data';

export const App = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const [readQuotes, setReadQuotes] = useState(0);
  const [remainingQuotes, setRemainingQuotes] = useState(QuotesObj.length);
  const percentageRead = (readQuotes / QuotesObj.length) * 100;
  const showNextQuote = () => {
    if (currentQuoteIndex < QuotesObj.length - 1) {
      setCurrentQuoteIndex(currentQuoteIndex + 1);
      setReadQuotes(readQuotes + 1);
      setRemainingQuotes(remainingQuotes - 1);
    }
  };

  const showPreviousQuote = () => {
    if (currentQuoteIndex > 0) {
      setCurrentQuoteIndex(currentQuoteIndex - 1);
    }
  };

  const quote = QuotesObj[currentQuoteIndex];

  function resetToFirstQuote() {
    setCurrentQuoteIndex(0);
    setReadQuotes(0);
    setRemainingQuotes(QuotesObj.length);
  }

  return (
    <div className="app">
      <div className="quotes-box">
        <h1>Quotes</h1>
      </div>
      <QuotesPanel quote={quote} />
      <QuotesInteraction
        quote={quote.quote}
        showPreviousQuote={showPreviousQuote}
        showNextQuote={showNextQuote}
        resetToFirstQuote={resetToFirstQuote}
      />
      <QuotesTracker
        readQuotes={readQuotes}
        remainingQuotes={remainingQuotes}
        percentageRead={percentageRead}
      />
      <SkillShowcase />
    </div>
  );
};
