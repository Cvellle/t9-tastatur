const initialState = {
  loading: false,
  numbers: [],
  output: [],
  filtered: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
 
    case 'SET_FILTERED':
      return { ...state, filtered: action.filtered}

    case 'SET_OUTPUT':
      return { ...state, output: action.output}     

    default:
      return state
  }
}
