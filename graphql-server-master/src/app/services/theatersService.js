import request from '../lib/request'
import { URL_Theaters_SERVICE } from '../config'

const getTheaterList = () => request.get(`${URL_Theaters_SERVICE}/alltheaters`)
const getTheaterByID = (id) => request.get(`${URL_Theaters_SERVICE}/theaters/${id}`)
const getTheaterByName = (theaterData) => request.getBody(`${URL_Theaters_SERVICE}/theaters`, { ...theaterData })
const createTheater = (theaterData) => request.post(`${URL_Theaters_SERVICE}/theaters`, { ...theaterData })
const updateTheater = (id, theaterData) => request.put(`${URL_Theaters_SERVICE}/theaters/${id}`, { ...theaterData })
const deleteTheaterByID = (id) => request.remove(`${URL_Theaters_SERVICE}/theaters/${id}`)
const deleteTheaterByName = (theaterData) => request.remove(`${URL_Theaters_SERVICE}/theaters`, { ...theaterData })

export default {
    getTheaterList,
    getTheaterByID,
    getTheaterByName,
    createTheater,
    updateTheater,
    deleteTheaterByID,
    deleteTheaterByName,
}


