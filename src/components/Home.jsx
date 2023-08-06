import React from 'react'
import { Link } from 'react-router-dom'
import './HomeCss.css'
import bg01 from './bg-01.jpg'
import bg04 from './bg-04.jpg'
import bg05 from './bg-05.jpg'
import bg06 from './bg-06.jpg'
import bg07 from './bg-07.jpg'
import bg03 from './bg-03.jpg'
import insta from './insta.webp'
import discord from './discord.jpg'
import li from './li.png'
import fb from './fb.png'
import github from './github.webp'




const Home = () => {
  return (
    <div className='home'>
      <header>
        <div className="hero" >
            <div className="containers">
                <h1>INVESTING IN CRYPTO-CURRENCY <br/> SEEMS TOO EASY</h1>
                <p>Your one-stop destination for all things crypto!</p>
                <Link to="/coins" className="btns">Get Started</Link>
            </div>
        </div>
      </header>

        <section className="features">
            <div className="container">
                <div className="feature">
                    <img src={bg01}  className='image-3' alt="Feature 1"/>
                    <h2 className='mb-5'>Cryptocurrency Prices</h2>
                </div>
                <div className="feature">
                    <img src={bg06} className='image-3' alt="Feature 2"/>
                    <h2 className='mb-5'>Crypto News</h2>
                </div>
                <div className="feature">
                    <img src={bg03}  className='image-3'  alt="Feature 3"/>
                    <h2 className='mt-3'>Cryptocurrency Charts and Analytics</h2>
                </div>
            </div>
        </section>

        <footer>
            <div className="containers">
                <p>&copy; 2023 CryptoSite. All rights reserved.</p>
                <a href="https://www.instagram.com/__singh_piyush__/"> <img className='mx-1' src={insta} width={30} height={30}></img></a>
                <a href="https://github.com/Piyush-kr-Singh"> <img className='mx-1' src={github} width={30} height={30}></img></a>
                <a href="https://www.linkedin.com/in/piyush-kumar-singh-902036248"> <img className='mx-1' src={li} width={30} height={30}></img></a>
                <a href="https://discord.com/invite/89AnW3y5"> <img className='mx-1' src={discord} width={30} height={30}></img></a>
                <a href="https://m.facebook.com/profile.php?id=100019846488651"> <img className='mx-1' src={fb} width={30} height={30}></img></a>
            </div>
            
        </footer>
    </div>
  )
}

export default Home
