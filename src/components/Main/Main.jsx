import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';
const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            
        {!showResult ? 
        <>            
                <div className="greet">
                <p><span>Hello, Virender.</span></p>
                <p>How can I help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on a upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly Summarise this concept: Urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                  </> : 
                  
        <div className='result'>

            <div className="result-title">
                          <img src={assets.user_icon} alt="" />
                          <p>{recentPrompt}</p>
                      </div>
                      <div className="result-data">
                          <img src={assets.gemini_icon} alt="" />
                          {loading ? <div className="loader">
                              <hr />
                              <hr />
                              <hr />
                          </div>: <p dangerouslySetInnerHTML={{__html:resultData }}></p>}
                      </div>
        </div> }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter prompt here'></input>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                Gemini can make mistakes. Check important info
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
