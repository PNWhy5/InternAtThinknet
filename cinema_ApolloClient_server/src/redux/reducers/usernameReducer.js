const initialState = {
    Username: '',
  }
const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
          return {...state, Username: action.Username};
      default:
          return {...state};
}
} 
export default usernameReducer