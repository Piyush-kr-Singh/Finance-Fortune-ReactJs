import React from 'react'
import './CoinItemCss.css'
import { Link } from 'react-router-dom';

const CoinsItem = ({title,id,imageUrl,symbol,price,bg,text}) => {
  
  return (
    <div>
      <div className="card" style={{backgroundColor : bg, color : text, height:'16rem'}}>
        <div className="d-flex justify-content-center">
          <img src={imageUrl} className="card-img-top mt-4 " alt="..." style={{height:'4vw', width : '4vw'}}/>
        </div>
        <div className="card-body">
          <h5 className="" align='center'>{symbol}</h5>
          <h6 className="card-title" align='center'>{title}</h6>
          <h6 className='mt-3' align='center'>₹{price}</h6>
          <div className="d-flex justify-content-center">
            <Link to={`/coin/${id}`}  rel="noopener noreferrer"> <button className="button btn ssm btn-sm align-items-center my-3" style={{backgroundColor : text, color : bg}}>Insights</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinsItem
