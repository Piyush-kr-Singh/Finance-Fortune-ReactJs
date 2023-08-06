import React, { useState } from 'react'
import './AboutCss.css'

import insta from './insta.webp'
import discord from './discord.jpg'
import li from './li.png'
import fb from './fb.png'
import github from './github.webp'


export default function About(props) {

    // const [myStyle,SetMyStyle] = useState(
    //     {
    //         color:'black',
    //         backgroundColor: 'white',
    //         border: '0.2px solid black',
    //     });

    let myStyle={
        color: props.mode==='dark'? 'white':'black',
        backgroundColor : props.mode==='dark'? '#042743':'white',
        border: '1px solid',
        borderColor: props.mode==='dark'? 'white':'black'
    }
  return (
    <>
    <div className='container mt-4' style={myStyle}>
        <h1 className='my-2' style={myStyle}>About Us</h1>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                <strong>Real-Time Cryptocurrency Prices</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
            Displaying real-time or delayed price information of various cryptocurrencies.

            The real-time crypto prices feature on a cryptocurrency website provides users with up-to-date and live information about the current market prices of various cryptocurrencies. This feature is crucial for traders, investors, and enthusiasts who want to stay informed about the latest price movements and trends in the cryptocurrency market.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Cryptocurrency Charts and Analysis</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
            Providing charts, graphs, and technical analysis tools for users to analyze price trends and patterns.

            
            Cryptocurrency charts and analysis are essential tools for traders, investors, and enthusiasts to understand the historical performance and trends of various cryptocurrencies. These charts provide visual representations of price movements, trading volumes, and other relevant data, helping users make informed decisions in the cryptocurrency market.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree" style={myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Cryptocurrency News</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Offering the latest news and updates related to the cryptocurrency market and blockchain technology.

            Cryptocurrency news refers to the latest updates, developments, and events related to the world of cryptocurrencies. It covers a wide range of topics, including announcements from blockchain projects, regulatory changes, market trends, technological advancements, partnerships, security incidents, and other significant happenings within the cryptocurrency and blockchain industry.
            </div>
            </div>
        </div>

        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingFour" style={myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                <strong>Cryptocurrency Exchanges</strong>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Information on popular cryptocurrency exchanges, including reviews, fees, and supported coins.

            Cryptocurrency exchanges are online platforms that facilitate the buying, selling, and trading of cryptocurrencies. These exchanges act as intermediaries, connecting buyers and sellers, and provide a marketplace for users to exchange their digital assets. Cryptocurrency exchanges play a crucial role in the cryptocurrency ecosystem by providing liquidity and enabling users to convert one cryptocurrency into another or trade cryptocurrencies for fiat currencies (such as US dollars, euros, etc.).
            </div>
            </div>
        </div>

        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingFive" >
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={myStyle}>
                <strong>Cryptocurrency Converter/Calculator</strong>
            </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Tools to convert between different cryptocurrencies and fiat currencies or calculate cryptocurrency values.

            A cryptocurrency converter/calculator is a tool or feature available on various cryptocurrency-related websites and platforms that allows users to convert the value of one cryptocurrency to another or between cryptocurrencies and fiat currencies (traditional currencies like USD, EUR, etc.). This tool helps users quickly assess the equivalent value of their cryptocurrencies in different denominations and make informed decisions regarding trades or transactions
            </div>
            </div>
        </div>

        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingSix" style={myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={myStyle}>
                <strong>Crypto Market Analysis</strong>
            </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Analysis and insights into the cryptocurrency market, trends, and price predictions.

            Crypto market analysis refers to the process of studying and evaluating the various factors that impact the cryptocurrency market's behavior, including price movements, trading volumes, trends, and market sentiment. It involves using different tools, techniques, and methodologies to gain insights into the market's current state and potential future developments. Crypto market analysis is essential for traders, investors, and enthusiasts to make informed decisions and manage their cryptocurrency holdings effectively.
            </div>
            </div>
        </div>

        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingSeven" style={myStyle}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={myStyle}>
                <strong>Regulatory Updates</strong>
            </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Updates on cryptocurrency regulations and compliance measures in different countries.
            </div>
            </div>
        </div>


        </div>

        {/* <button className='btn btn-primary my-2'  onClick={toogleStyle}>{btnText}</button> */}
    </div>

    <footer className='footers mt-4'>
            <div className="containers">
                <p>&copy; 2023 CryptoSite. All rights reserved.</p>
                <a href="https://www.instagram.com/__singh_piyush__/"> <img className='mx-1' src={insta} width={30} height={30}></img></a>
                <a href="https://github.com/Piyush-kr-Singh"> <img className='mx-1' src={github} width={30} height={30}></img></a>
                <a href="https://www.linkedin.com/in/piyush-kumar-singh-902036248"> <img className='mx-1' src={li} width={30} height={30}></img></a>
                <a href="https://discord.com/invite/89AnW3y5"> <img className='mx-1' src={discord} width={30} height={30}></img></a>
                <a href="https://m.facebook.com/profile.php?id=100019846488651"> <img className='mx-1' src={fb} width={30} height={30}></img></a>
            </div>
            
        </footer>
    </>
  )
}
