import React, { useEffect } from "react";
import store from "../store";

const CitationContainer = (props) => {
  // get current citation from store
  let state = store.getState().doi;

  // use the useEffect hook so that the divs below will be re-rendered when there is a new currentCitation
  // useEffect(() => {
  //   // from the citation object, create the citation based on 
  //   return null

  // }, [state.doiObj, state.currentFormat])

  // create an empty array to push the appropriate component build
  const citation = [
    <div>
      <p>You have not searched for any citations yet</p>
    </div>
  ];
  return(
    <div id="citationContainer">
      {citation}
    </div>
  )
}

export default CitationContainer