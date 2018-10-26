
export const setLoading = loading => {
  return {
    type: 'SET_LOADING',
    loading,
  }
}

export const setNumbers = numbers => ({
  type: 'SET_NUMBERS',
  numbers,
})

export const setFiltered = filtered => {
  return {
    type: 'SET_FILTERED',
    filtered,
  }
}

export const filterNumbers = code => ({
  type: 'FILTER_NUMBERS',
  code,
})

export const selectNumber = selectedNumber => ({
  type: 'SELECT_NUMBER',
  selectedNumber,
})

