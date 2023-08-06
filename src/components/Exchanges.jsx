import React, { useState } from 'react'
import Spinner from './Spinner';
import { useEffect } from 'react';
import { Server } from '../main';
import ExchangeItem from './ExchangeItem';

const Exchanges = (Props) => {

    const [exchanges,setExchanges] =useState([]);
    const [loading,setLoading]=useState(false);

      const fetchData = async () => {
        try {
          setLoading(true);
          const url = `${Server}/exchanges`;
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setExchanges(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>
      {loading && <Spinner/>}
      <div className='row my-3'>
        {exchanges.map((element) => (
          <div className='col-sm-2 my-3' key={element.id}>
            <ExchangeItem bg={Props.mode} text={Props.text}
              country={element.country}
              title={element.name}
              id={element.id}
              rank={element.trust_score_rank}
              imageUrl={element.image}
              url={element.url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exchanges
