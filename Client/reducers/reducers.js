import * as types from '../constants/actionTypes';
import * as actions from '../actions/actions';

const initialState = {
  currentString : '', // current search string in DOI search box
  currentFormat : '', // which formatting setup shall we use?
  currentCitation : '', // what is the current properly cited text
  searchStatus: '', // current status when accessing proxy, parsing, database upload
  doiObj: {}, // current doi object that will contain the appropriate metadata
  worksCited: [] // array for citation object
}

const doiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INPUT: {
      const newState = {...state, currentString : action.payload};
      return newState
    };

    case types.UPDATE_FORMAT: {
      const newState = {...state, currentFormat : action.payload}
    }

    case types.SEARCH_DOI: {
      // once the DOI has been found
      // look it up via DOI.org proxy
      const proxyhtml = `https://doi.org/${state.currentString}`
      fetch(proxyhtml, {
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin" : "*"
        }
      })
        .then (data => console.log(data))
        .catch (err => console.log("error"))

      // need to add state management
      console.log(action.payload)
      return state

    };

    case types.UPDATE_CITATION: {

    };

    case types.UPDATE_STATUS: {

    };

    case types.MAKE_DOI_OBJ: {

    };

    case types.ADD_WORKS_CITED: {

    };

    default:
      return state
  }
}

export default doiReducer;