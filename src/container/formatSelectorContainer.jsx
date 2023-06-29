import React from "react";
import { useDispatch } from "react-redux";
import * as actions from '../actions/actions'
import store from "../store";

const FormatSelectorContainer = (props) => {
  // create a dispatch function to use reducers
  const dispatch = useDispatch();

  // function to update format when a new option is selected
  const formatSelection = () => {
    const form = document.getElementById('format')
    dispatch(actions.updateFormatActionCreator(form.value))
  }

  // created just for general display
  const generateCitation = () => {
    const state = store.getState().doi;
    const {author, year, title, journal, volume, number, pages, doi} = state.doiObj
    let citation;

    switch (state.currentFormat) {
      case "APA": {
        citation = `${author}. ${year}. ${title}. ${journal}, ${volume}(${number}), ${pages}. https://doi.org/${doi}`;
        break;
      }
      case "MLA": {
        citation = `${author}.`;
        break;
      }
      case "Chicago": {
        citation = `${author}. ${journal}`;
      }
    }

    return dispatch(actions.updateCitationActionCreator(citation));
  }

  return(
    <div id="formatSelectorContainer">
      <select name="format" id="format" onChange={() => formatSelection()}>
        <option value="APA">APA Format</option>
        <option value="MLA">MLA Format</option>
        <option value="Chicago">Chicago Format</option>
      </select>
      <button className="button" onClick={() => generateCitation()}>Cite it!</button>
    </div>
  );
}

export default FormatSelectorContainer