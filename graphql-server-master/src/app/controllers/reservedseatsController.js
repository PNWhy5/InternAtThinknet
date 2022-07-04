import reservedseatsService from '../services/reservedseatsService'

const getReservedSeatList = async ()  => {
  try {
    const response = await reservedseatsService.getReservedSeatList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const getReservedSeatByID = async (id) => {
  try {
    const response = await reservedseatsService.getReservedSeatByID(id)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getReservedSeatByShowtimeID = async (MovieData) => {
  try {
    console.log(MovieData)
    const response = await reservedseatsService.getReservedSeatByShowtimeID(MovieData)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}

const createReservedSeat = async (ReservedSeatData) => {
  console.log(ReservedSeatData)
  try {
    console.log(ReservedSeatData)
    const response = await reservedseatsService.createReservedSeat(ReservedSeatData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateReservedSeat = async (id, ReservedSeatData) => {
  try {
    const response = await reservedseatsService.updateReservedSeat(id, ReservedSeatData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteReservedSeatByID = async (id) => {
  try {
    const response = await reservedseatsService.deleteReservedSeatByID(id)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleteReservedSeatByShowtimeID = async (ReservedSeatData) => {
  try {
    const response = await reservedseatsService.deleteReservedSeatByShowtimeID(ReservedSeatData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getReservedSeatList,
  getReservedSeatByID,
  getReservedSeatByShowtimeID,
  createReservedSeat,
  updateReservedSeat,
  deleteReservedSeatByID,
  deleteReservedSeatByShowtimeID,
}