import request from '../lib/request'
import { URL_Showtimes_SERVICE } from '../config'

const getShowtimeList = () => request.get(`${URL_Showtimes_SERVICE}/allshowtimes`)
const getShowtimeByID = (id) => request.get(`${URL_Showtimes_SERVICE}/showtimes/${id}`)
const getShowtimeByMovieID = (ShowtimeData) => request.getBody(`${URL_Showtimes_SERVICE}/showtimes/movie_id`, { ...ShowtimeData })
const getShowtimeByTheaterID = (ShowtimeData) => request.getBody(`${URL_Showtimes_SERVICE}/showtimes/theater_id`, { ...ShowtimeData })
const getShowtimeByDate = (ShowtimeData) => request.getBody(`${URL_Showtimes_SERVICE}/showtimes/Date`, { ...ShowtimeData })
const getShowtimeByTimeDate = (ShowtimeData) => request.getBody(`${URL_Showtimes_SERVICE}/showtimes/TimeDate`, { ...ShowtimeData })
const createShowtime = (ShowtimeData) => request.post(`${URL_Showtimes_SERVICE}/showtimes`, { ...ShowtimeData })
const updateShowtime = (id, ShowtimeData) => request.put(`${URL_Showtimes_SERVICE}/showtimes/${id}`, { ...ShowtimeData })
const deleteShowtime = (id) => request.remove(`${URL_Showtimes_SERVICE}/showtimes/${id}`)

export default {
    getShowtimeList,
    getShowtimeByID,
    getShowtimeByMovieID,
    getShowtimeByTheaterID,
    getShowtimeByDate,
    getShowtimeByTimeDate,
    createShowtime,
    updateShowtime,
    deleteShowtime,
}


