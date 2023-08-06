import React from 'react'
import { Link } from 'react-router-dom';
import light from './light.png'
import dark from './dark.png'

import bg06 from './btc.jpeg'

export default function Navbar(Props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`} style={{borderBottom : '1px solid black'}}>
      {/* <Link to='/'><img src={bg06} width="35" height="35" alt="" className='ml-1' style={{borderRadius : '50%'}}></img></Link>  */}
    <div className="container-fluid" style={{fontFamily : 'Times new roman'}}>
      <Link className="navbar-brand" to="/" style={{marginRight : '40px'}}>{Props.title}</Link>
      
      {/* <a className="navbar-brand" href="#">{Props.title}</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">{Props.aboutText}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/exchanges" >Exchanges</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/coins">Coins</Link>
          </li>
        </ul>
       
        <div className='btn' onClick={Props.toggleMode}><img src={Props.mode === 'light' ? dark : light} alt="" width={30} style={{borderRadius:'50%' , backgroundColor:'white'}}/></div>
        
      </div>
    </div>
  </nav>
  );
}