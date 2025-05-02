import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.quotable.io/random?tags=philosophy')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-400 mt-4">Loading stoic wisdom...</p>;
  }

  return (
    <div className="mt-4 mb-10 text-center text-white">
      {quote && (
        <>
          <p className="text-lg italic">"{quote.content}"</p>
          <p className="mt-2 text-sm text-gray-400">— {quote.author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;
