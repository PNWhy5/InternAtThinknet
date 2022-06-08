const initialState = {
    Qanswer: [],
    Qnum: 0,
  }
const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADDQANSWER':
          return {...state, Qanswer: action.Qanswer};
      case 'UPDATEQNUM':
          return {...state, Qnum: action.Qnum};
      default:
          return {...state};
}
} 
export default questionReducer