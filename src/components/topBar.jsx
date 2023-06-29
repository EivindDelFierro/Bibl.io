import React from "react";
import '../assets/openbook icon.png'

const TopBar = (props) => {

  return(
    <div className="topBar">
      <div className="topLeft">
        <img 
          src="/assets/openbook icon.png" 
          alt="bibl.io" 
          height="50" 
          id="logo"></img>
        <p id="biblioName">Bibl.io<span id="biblioSubtitle">: DOI Citation Engine</span></p>
      </div>
      <div>
        <button id="citationsButton" className="button">My Citations</button>
      </div>
    </div>
  )
}

export default TopBar;