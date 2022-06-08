const initialState = {
    userName: '',
    answer: [],
  }
const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADDNAME':
          return {...state, userName: action.userName};
      case 'ADDANSWER':
          return {...state, answer: action.answer};
      default:
          return {...state};
}
} 
export default usernameReducer