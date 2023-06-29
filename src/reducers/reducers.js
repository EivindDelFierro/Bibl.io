import * as types from '../constants/actionTypes';

const initialState = {
  currentString : '', // current search string in DOI search box
  currentFormat : 'APA', // which formatting setup shall we use?
  currentCitation : '', // what is the current properly cited text
  searchStatus: '', // current status when accessing proxy, parsing, database upload
  doiObj: {}, // current doi object that will contain the appropriate metadata
  worksCited: [] // array for citation object
}

const doiReducer = (state = initialState, action) => {
  switch (action.type) {
    // updates the input string as user types into the form box
    case types.UPDATE_INPUT: {
      const newState = {...state, currentString : action.payload};
      return newState
    };

    // updates the selected format based on dropdown selection
    case types.UPDATE_FORMAT: {
      const newState = {...state, currentFormat : action.payload}
      return newState
    }

    case types.SEARCH_DOI: {
      // once the DOI has been found
      const apiRequest = `http://localhost:3000/api?doi=${state.currentString}`
      const propertyObj = {};
      
      // look it up via DOI.org proxy
      fetch(apiRequest)
        // .then(data => data.json())
        // .then(data => console.log(data))
        .then(data => data.json())
        .then(data => {
          const lines = data.split('\n');
          const metaArray = [];

          lines.forEach( line => {
            line = line.trim();
            if (/(\s=\s)/.test(line)) metaArray.push(line)
          })

          console.log("metaArray", metaArray)

          // why does this terminate early?
          for (let i = 0; i < metaArray.length; i++) {
            const line = metaArray[i];
            console.log('line', line)

            const keyValue = line.split(' = ');
            const key = keyValue[0]
            const value = keyValue[keyValue.length-1];

            const re = /\{(.*?)\}/

            try {
              const string = value.match(re)[1];
              propertyObj[key] = string
            } catch {
              propertyObj[key] = value.slice(0, value.length-1)
            }
          }
        })
        .catch(err => null)
        
      const newState = {...state, searchStatus : "Finished", doiObj : propertyObj}
      return newState
    };

    // may probably be merged in a useEffect hook
    case types.UPDATE_CITATION: {
      const newState = {...state, currentCitation : action.payload};
      return newState
    };

    // stretch goal
    case types.UPDATE_STATUS: {

    };

    // can probably be merged with Search_DOI
    case types.MAKE_DOI_OBJ: {

    };

    // stretch goal
    case types.ADD_WORKS_CITED: {

    };

    default:
      return state
  }
}

export default doiReducer;