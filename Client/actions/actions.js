import * as types from '../constants/actionTypes'

export const updateInputActionCreator = (currentInput) => ({
  type: types.UPDATE_INPUT,
  payload: currentInput
})

export const updateFormatActionCreator = (format) => ({
  type: types.UPDATE_FORMAT,
  payload: format
})

export const searchDoiActionCreator = () => ({
  type: types.SEARCH_DOI,
})

export const updateCitationActionCreator = (citation) => ({
  type: types.UPDATE_CITATION,
  payload: 'test' //need to add payload
})

export const makeDoiObjActionCreator = (doiObj) => ({
  type: types.MAKE_DOI_OBJ,
  payload: 'test' //need to add payload
})

export const addWorksCitedActionCreator = (doiObj) => ({
  type: types.ADD_WORKS_CITED,
  payload: 'test' //need to add payload
})