import React from 'react'
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import { Server } from '../main';
import { useState } from 'react';
import { useEffect } from 'react';
import red from './red.png';
import green from './green.png';
import Chart from './Chart';
import './CoinItemCss.css'

const CoinDetails = () => {
    const [coin,setCoin] =useState([]);
    const [loading,setLoading]=useState(false);
    const [days,setDays]=useState("24h");
    const [currency, setCurrency] = useState("inr");
    const [chartArray,setChartArray]=useState([]);
    const [time,setTime]=useState("today");
    // const [price,setPrice]=useState(null);
    const [percent,setPercent]=useState(null);

    const params=useParams();
    const btns=["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];
   

    const switchChartStats = (key) => {
        switch (key) {
          case "24h":
            setDays("24h");
            setTime('1d');
            setLoading(true);
            break;
          case "7d":
            setDays("7d");
            setTime('past 7 days');
            setLoading(true);
            break;
          case "14d":
            setDays("14d");
            setTime('past 14 days');
            setLoading(true);
            break;
          case "30d":
            setDays("30d");
            setTime('past 30 days');
            setLoading(true);
            break;
          case "60d":
            setDays("60d");
            setTime('past 60 days');
            setLoading(true);
            break;
          case "200d":
            setDays("200d");
            setTime('past 200 days');
            setLoading(true);
            break;
          case "1y":
            setDays("365d");
            setTime('past year');
            setLoading(true);
            break;
          case "max":
            setDays("max");
            setTime('all time');
            setLoading(true);
            break;
    
          default:
            setDays("24h");
            setLoading(true);
            break;
        }
      };


    const fetchCoin = async () => {
        try {
          setLoading(true);
          const url = `${Server}/coins/${params.id}`;
          const response = await fetch(url);
          const data = await response.json();

          const chartUrl = `${Server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`;

          const chartResponse = await fetch(chartUrl);
          const chartData = await chartResponse.json();

          console.log(data);
          setCoin(data);
          setChartArray(chartData.prices);
          setPercent(data.market_data.market_cap_change_percentage_24h);


            // Extracting price change and percentage change based on the selected interval
      switch (days) {
        case "24h":
          // setPrice(data.market_data.price_change_24h);
          setPercent(data.market_data.market_cap_change_percentage_24h);
          break;
        case "7d":
          // setPrice(data.market_data.price_change_percentage_7d);
          setPercent(data.market_data.price_change_percentage_7d);
          break;
        case "14d":
          // setPrice(data.market_data.price_change_percentage_14d);
          setPercent(data.market_data.price_change_percentage_14d);
          break;
        case "30d":
          // setPrice(data.market_data.price_change_percentage_30d);
          setPercent(data.market_data.price_change_percentage_30d);
          break;
        case "60d":
          // setPrice(data.market_data.price_change_percentage_60d);
          setPercent(data.market_data.price_change_percentage_60d);
          break;
        case "200d":
          // setPrice(data.market_data.price_change_percentage_200d);
          setPercent(data.market_data.price_change_percentage_200d);
          break;
        case "365d":
          // setPrice(data.market_data.price_change_percentage_1y);
          setPercent(data.market_data.price_change_percentage_1y);
          break;
        case "max":
          // setPrice(data.market_data.price_change_percentage_1y);
          setPercent(data.market_data.market_cap_change_percentage_1y);
          break;
        default:
          // setPrice(data.market_data.price_change_24h);
          setPercent(data.market_data.market_cap_change_percentage_24h);
          break;
      }

          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchCoin();
      }, [params.id,currency,days]);
   
  return (
    <>
        {loading && <Spinner/>}
        {coin.image && (
        <div className='container' style={{fontFamily : 'times new roman', border :'2px solid black'}}>

            <div className="d-flex justify-content-start my-4" >
                <img src={coin.image.small} className='img-sm my-4'  width={50} height={50} alt="" />
                
                <span className=' mx-4 ' style={{fontFamily : 'Times new Roman', fontSize:'60px'}}>{coin.name}</span>
            </div>
            <hr />
            <h3>₹&nbsp;{coin.market_data.current_price["inr"]}</h3>

            <div className='my-2' style={{color : percent < 0 ? 'red' : 'green' }}>
                <img src={percent < 0 ? red : green} width={16} height={16} alt=""  style={{backgroundColor: 'transparent', backgroundBlendMode: 'multiply'}}/>  ({percent}%) {time}
            </div>
            <span style={{fontSize:'13px'}}>{Date(coin.market_data.last_updated).split('G')[0]}</span>



            <div className='mb-4 mt-5'>
                {btns.map((i) => (
                <button className='btns mx-2 my-1' key={i} onClick={() => switchChartStats(i)} >
                {i}
                </button>
                ))}
            </div>

            <div className='container mb-5'>
                <Chart key={`${days}-${currency}`} arr={chartArray} days={days} currency={currency} />
            </div>



            <div className='my-4'>
                <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar"  style={{ width: `${(coin.market_data.current_price["inr"] - coin.market_data.low_24h["inr"]) /(coin.market_data.high_24h["inr"] - coin.market_data.low_24h["inr"]) * 100}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="d-flex justify-content-between">
                    <span>₹{coin.market_data.low_24h["inr"]}</span>
                    <span>24H</span>
                    <span>₹{coin.market_data.high_24h["inr"]}</span>
                </div>
            </div>

            

            <div className='container my-5' style={{fontFamily : 'fantasy'}}>
                <div className="d-flex justify-content-between">
                    <div>MAX SUPPLY</div>
                    <div>{coin.market_data.max_supply}</div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>CIRCULATING SUPPLY</div>
                    <div>{coin.market_data.circulating_supply}</div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>MARKET CAP</div>
                    <div><strong>₹</strong>{coin.market_data.market_cap['inr']}</div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>ALL TIME LOW</div>
                    <div><strong>₹</strong>{coin.market_data.atl['inr']}</div>
                </div>

                <div className="d-flex justify-content-between">
                    <div>ALL TIME HIGH</div>
                    <div><strong>₹</strong>{coin.market_data.ath['inr']}</div>
                </div>

            </div>
        </div>
        )}
    </>
  )
}

export default CoinDetails
