import React, { useState, useEffect } from 'react';
import '../Quote_Styles/main.css';
import QuoteBox from './QuoteBox';

function Quotes() {
  const [data, setData] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.quotable.io/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setRefreshFlag(false);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [refreshFlag]);

  const handleRefresh = async () => {
    setRefreshFlag(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        {data ? (<QuoteBox quotes={data}/>) : (
            <span className="visually-hidden">Loading...</span>
        )}
        <button onClick={handleRefresh} >Refresh</button>
      </header>
    </div>
  );
}

export default Quotes;
