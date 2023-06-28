import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/actions";
import store from "../store";

const DoiContainer = (props) => {
  const dispatch = useDispatch();

  // define function to perform while user is adding the DOI input:
  const doiFormUpdate = (event) => {
    const currentInput = event.target.value;
    dispatch(actions.updateInputActionCreator(currentInput))
  }

  // define a function to perform doiLookup on buttonclick
  const doiLookup = (event) => {
    const currentString = store.getState().doi.currentString
    dispatch(actions.searchDoiActionCreator(currentString))
  }

  return(
    <div>
      <p>DOI Input #</p>

      <input type="text" name="DOI_Number_Input" id="DOI_Number_Input" onChange={event => doiFormUpdate(event)} value="10.47366/sabia.v5n1a3"></input>

      <button className="button" onClick={event => doiLookup(event)}>DOI Lookup</button>
    </div>
  )
}

export default DoiContainer;