const initialState = {
  loading: false,
  numbers: [],
  filtered: [],
  filtered2: [],

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_NUMBERS':
      return { ...state, numbers: action.numbers}
    case 'SET_FILTERED':
      return { ...state, filtered: action.filtered}
    case 'FILTER_NUMBERS':
      const filtered = state.numbers.filter(num => num.code.includes(action.code))

      return { ...state,  filtered}
    case 'SELECT_NUMBER':
      return { ...state, selectedNumber: action.  selectedNumber}
    default:
      return state
  } 
}
