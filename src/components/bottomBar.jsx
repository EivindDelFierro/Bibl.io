import React from "react";
import "../assets/Ko-Fi.png"

const BottomBar = (props) => {
  return(
    <div className="bottomBar">
      <div id="footerLeft">
        <button 
          className="fadedButton" 
          onClick={event => window.open('https://www.linkedin.com/in/eivind-del-fierro-59b133265/')
        }>About</button>
        <button 
          className="fadedButton" 
          onClick={event => window.open('https://github.com/EivindDelFierro')}>Github</button>
        {/* <span> Share </span> */}
      </div>
      <div id="footerRight">
        <img 
          height="27" 
          src="/assets/Ko-Fi.png"
          onClick={event => window.open('https://ko-fi.com/eivinddelfierro')}
        ></img>
      </div>
    </div>
  )
}

export default BottomBar;