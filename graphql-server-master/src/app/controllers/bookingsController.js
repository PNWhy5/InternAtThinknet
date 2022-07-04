import bookingsService from '../services/bookingsService'

const getBookingList = async ()  => {
  try {
    const response = await bookingsService.getBookingList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const getBookingByReference_code = async (Reference_code) => {
  try {
    const response = await bookingsService.getBookingByReference_code(Reference_code)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getBookingByUsername = async (bookingData) => {
  try {
    const response = await bookingsService.getBookingByUsername(bookingData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const createBooking = async (bookingData) => {
  try {
    console.log('Create Booking')
    console.log(bookingData)
    const response = await bookingsService.createBooking(bookingData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateBooking = async (Username, blogData) => {
  try {
    const response = await bookingsService.updateBooking(Username, blogData)
    console.log(response.data)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteBookingByCode = async (Reference_code) => {
  try {
    const response = await bookingsService.deleteBookingByCode(Reference_code)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleteBookingByUsername = async (bookingData) => {
  try {
    const response = await bookingsService.deleteBookingByUsername(bookingData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getBookingList,
  getBookingByReference_code,
  getBookingByUsername,
  createBooking,
  updateBooking,
  deleteBookingByCode,
  deleteBookingByUsername,
}