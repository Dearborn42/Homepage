import React, { useState, useEffect } from 'react';
import '../Quote_Styles/main.css';
import QuoteBox from './QuoteBox';

function Quotes({pipePlay}) {
  const [data, setData] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
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
    pipePlay();
    setRefreshFlag(true);
  };
  return (
    <div className="Quotes">
      {data ? (<QuoteBox quotes={data}/>) : (<span className="visually-hidden">Loading...</span>)}
      <button onClick={handleRefresh} type="btn" className='refresh-button'>Refresh</button>
    </div>
  );
}

export default Quotes;
