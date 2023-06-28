import React from "react";

const BottomBar = (props) => {
  return(
    <div>
      <div id="footerLeft">
        <span> About </span>
        <a href="https://github.com/EivindDelFierro"> Github </a>
        <span> Share </span>
      </div>
      <div id="footerRight">
        <a href="https://ko-fi.com/eivinddelfierro">Buy me a Ko-fi</a>
      </div>
    </div>
  )
}

export default BottomBar;