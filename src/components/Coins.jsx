import React, { useState } from 'react'
import Spinner from './Spinner';
import { useEffect } from 'react';
import { Server } from '../main';
import CoinsItem from './CoinsItem';

const Coins = (Props) => {

    const [coins,setCoins] =useState([]);
    const [loading,setLoading]=useState(false);
    const [currency,setCurrency]=useState("inr");
    const [totalResults, setTotalResults] = useState(0);
    const [page,setPage]=useState(1);

      const fetchData = async () => {
        try {
          setLoading(true);
          const url = `${Server}/coins/markets/?vs_currency=${currency}&page=${page}`;
          const response = await fetch(url);
          const data = await response.json();
          // console.log(data);
          setTotalResults(550);
          setCoins(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, [currency,page]);


      const handlePrevClick = () => {
        setLoading(true);
        setPage((prevPage) => prevPage - 1);
        // window.scrollTo(0, 0);
      };
    
      const handleNextClick = () => {
        setLoading(true);
        if (page + 1 > Math.ceil(totalResults / 100)) {
          return;
        }
        setPage((prevPage) => prevPage + 1);
        window.scrollTo(0, 0);
      };

  return (
    <div>
      {loading && <Spinner/>}
      <div className='row my-3'>
        {coins.map((element) => (
          <div className='col-sm-2 my-3' key={element.id}>
            <CoinsItem bg={Props.mode} text={Props.text}
              title={element.name}
              id={element.id}
              imageUrl={element.image}
              symbol={element.symbol}
              price={element.current_price}
            />
          </div>
        ))}
      </div>

        <div className='container d-flex justify-content-between my-3'>
            <button disabled={page <= 1}  type='button'  className='btn btn-dark' onClick={()=>handlePrevClick()}>
            &larr; Previous
            </button>
            <button
            disabled={page + 1 > Math.ceil(totalResults / 100)}
            type='button'
            className='btn btn-dark'
            onClick={handleNextClick}
            >
            Next &rarr;
            </button>
        </div>
    </div>
  )
}

export default Coins
