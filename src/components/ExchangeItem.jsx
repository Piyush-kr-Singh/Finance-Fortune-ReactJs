import React from 'react'
import './Exchangeitemcss.css'

const ExchangeItem = ({country,title,id,rank,imageUrl,url,bg,text}) => {

  return (
    <div>
      <div className="card" style={{backgroundColor : bg, color : text, height:'15rem'}}>
        <div className="d-flex justify-content-center">
          <img src={imageUrl} className="card-img-top mt-4 " alt="..." style={{height:'4vw', width : '4vw'}}/>
        </div>
        <div className="card-body">
        <h5 className="" align='center'>{rank}</h5>
          <h6 className="card-title" align='center'>{title}</h6>
          <div className="d-flex justify-content-center">
            <a href={url} target="_blank" rel="noopener noreferrer"> <button className="botton btn btn-sm align-items-center my-3" style={{backgroundColor : text, color : bg}}>Read</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeItem
