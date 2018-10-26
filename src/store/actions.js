import {
  SET_LOADING,
  SET_NUMBERS,
  SET_FILTERED,
  FILTER_NUMBERS
} from './actionNames';

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading,
  }
}

export const setNumbers = numbers => ({
  type: SET_NUMBERS,
  numbers,
})

export const setFiltered = filtered => {
  return {
    type: SET_FILTERED,
    filtered,
  }
}

export const filterNumbers = code => ({
  type: FILTER_NUMBERS,
  code,
})
