import React from "react";
import { useDispatch } from "react-redux";
import * as actions from '../actions/actions'

const FormatSelectorContainer = (props) => {
  const dispatch = useDispatch();

  const formatSelection = () => {
    const form = document.getElementById('format')
    return actions.updateFormatActionCreator(form.value)
  }

  return(
    <div>
      <select name="format" id="format" onChange={() => formatSelection()}>
        <option value="APA">APA Format</option>
        <option value="MLA">MLA Format</option>
        <option value="Chicago">Chicago Format</option>
      </select>
      <button className="button">Cite it!</button>
    </div>
  );
}

export default FormatSelectorContainer