import React from "react";

const TopBar = (props) => {
  return(
    <div className="bars">
        <span id="biblioName">Bibli.io</span>
        <span id="biblioSubtitle">: DOI Citation Engine</span>
        <button id="bibliography" className="button">My Citations</button>
    </div>
  )
}

export default TopBar;