const initialState = {
  Showtime_id: '',
}

const ShowtimeReserved = (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVED':
        return {...state, Showtime_id: action.Showtime_id};
    default:
        return {...state};
}
} 
export default ShowtimeReserved