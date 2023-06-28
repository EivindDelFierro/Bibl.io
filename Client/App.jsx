import React from "react";
import TopBar from "./components/topBar.jsx";
import BottomBar from "./components/bottomBar.jsx";
import CentralContainer from "./container/centralContainer.jsx";

const App = (prop) => {
  return(
    <div>
      <TopBar/>
      <CentralContainer/>
      <BottomBar/>
    </div>
  )
}

export default App;