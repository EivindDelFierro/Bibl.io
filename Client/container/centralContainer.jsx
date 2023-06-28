import React from "react";
import CitationContainer from "./citationContainer.jsx";
import DoiContainer from "./doiContainer.jsx";
import FormatSelectorContainer from "./formatSelectorContainer.jsx";

const CentralContainer = (props) => {
  return(
    <div>
      <DoiContainer/>
      <FormatSelectorContainer/>
      <CitationContainer/>
    </div>
  )
}

export default CentralContainer