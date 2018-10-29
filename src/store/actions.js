import {
  SET_LOADING,
  SET_FILTERED,
  SET_OUTPUT,
} from './actionNames';

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading,
  }
}

export const setFiltered = filtered => {
  return {
    type: SET_FILTERED,
    filtered,
  }
}

export const setOutput = output => ({
  type: SET_OUTPUT,
  output,
})




