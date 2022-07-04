import request from '../lib/request'
import { URL_Movies_SERVICE } from '../config'

const getMovieList = () => request.get(`${URL_Movies_SERVICE}/allmovies`)
const getMovieByID = (id) => request.get(`${URL_Movies_SERVICE}/movies/${id}`)
const getMovieByName = (MovieData) => request.getBody(`${URL_Movies_SERVICE}/movies`, { ...MovieData })
const createMovie = (MovieData) => request.post(`${URL_Movies_SERVICE}/movies`, { ...MovieData })
const updateMovie = (id, MovieData) => request.put(`${URL_Movies_SERVICE}/movies/${id}`, { ...MovieData })
const deleteMovieByID = (id) => request.remove(`${URL_Movies_SERVICE}/movies/${id}`)
const deleteMovieByName = (MovieData) => request.remove(`${URL_Movies_SERVICE}/movies`, { ...MovieData })


export default {
    getMovieList,
    getMovieByID,
    getMovieByName,
    createMovie,
    updateMovie,
    deleteMovieByID,
    deleteMovieByName,
}


