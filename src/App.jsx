import React from 'react';
import Quotes from './data/data';

export const App = () => {
  return (
    <div className="App">
      <h1>Aplicația cu Citate</h1>
      {Quotes.map(quote => (
        <div key={quote.id}>
          <h2>{quote.author}</h2>
          <p>{quote.quote}</p>
          <img src={quote.authorImage} alt={quote.author} />
        </div>
      ))}
    </div>
  );
};
