const bottomBar = () => {
  return (
    <div className="footer">
      <div className = "footerL">
        <a href="https://www.linkedin.com/in/eivind-del-fierro-59b133265/">About</a>
        <a href="https://github.com/EivindDelFierro">Github</a>
        {/* <a href="share links">Share</a> */}
      </div>
      <div className="footerR">
        {/* Have the ko-fi link all the way to the left. */}
        <a href="https://ko-fi.com/eivinddelfierro#paypalModal">Buy me a Ko-fi</a>
      </div>
    </div>
  )
}

export default bottomBar;