import request from '../lib/request'
import { URL_Reserved_seats_SERVICE } from '../config'

const getReservedSeatList = () => request.get(`${URL_Reserved_seats_SERVICE}/allreservedseats`)
const getReservedSeatByID = (id) => request.get(`${URL_Reserved_seats_SERVICE}/reservedseats/${id}`)
const getReservedSeatByShowtimeID = (ReservedSeatData) => request.getBody(`${URL_Reserved_seats_SERVICE}/reservedseats`, { ...ReservedSeatData })
const createReservedSeat = (ReservedSeatData) => request.post(`${URL_Reserved_seats_SERVICE}/reservedseats`, { ...ReservedSeatData })
const updateReservedSeat = (id, ReservedSeatData) => request.put(`${URL_Reserved_seats_SERVICE}/reservedseats/${id}`, { ...ReservedSeatData })
const deleteReservedSeatByID = (id) => request.remove(`${URL_Reserved_seats_SERVICE}/reservedseats/${id}`)
const deleteReservedSeatByShowtimeID = (ReservedSeatData) => request.remove(`${URL_Reserved_seats_SERVICE}/reservedseats`,{...ReservedSeatData})


export default {
    getReservedSeatList,
    getReservedSeatByID,
    getReservedSeatByShowtimeID,
    createReservedSeat,
    updateReservedSeat,
    deleteReservedSeatByID,
    deleteReservedSeatByShowtimeID,
}


