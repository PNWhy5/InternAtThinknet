import request from '../lib/request'
import { URL_Bookings_SERVICE } from '../config'

const getBookingList = () => request.get(`${URL_Bookings_SERVICE}/allbookings`)
const getBookingByReference_code = (Reference_code) => request.get(`${URL_Bookings_SERVICE}/bookings/${Reference_code}`)
const getBookingByUsername = (bookingData) => request.getBody(`${URL_Bookings_SERVICE}/bookings`, { ...bookingData })
const createBooking = (bookingData) => request.post(`${URL_Bookings_SERVICE}/bookings`, { ...bookingData })
const updateBooking = (Reference_code, bookingData) => request.put(`${URL_Bookings_SERVICE}/bookings/${Reference_code}`, { ...bookingData })
const deleteBookingByCode = (Reference_code) => request.remove(`${URL_Bookings_SERVICE}/bookings/${Reference_code}`)
const deleteBookingByUsername = (bookingData) => request.remove(`${URL_Bookings_SERVICE}/bookings`, { ...bookingData })


export default {
    getBookingList,
    getBookingByReference_code,
    getBookingByUsername,
    createBooking,
    updateBooking,
    deleteBookingByCode,
    deleteBookingByUsername,
}


