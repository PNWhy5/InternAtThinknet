import theatersService from '../services/theatersService'

const getTheaterList = async ()  => {
  try {
    const response = await theatersService.getTheaterList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const getTheaterByID = async (id) => {
  try {
    const response = await theatersService.getTheaterByID(id)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getTheaterByName = async (theaterData) => {
  try {
    const response = await theatersService.getTheaterByName(theaterData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const createTheater = async (theaterData) => {
  try {
    const response = await theatersService.createTheater(theaterData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateTheater = async (id, theaterData) => {
  try {
    const response = await theatersService.updateTheater(id, theaterData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteTheaterByID = async (id) => {
  try {
    const response = await theatersService.deleteTheaterByID(id)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleteTheaterByName = async (theaterData) => {
  try {
    const response = await theatersService.deleteTheaterByName(theaterData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getTheaterList,
  getTheaterByID,
  getTheaterByName,
  createTheater,
  updateTheater,
  deleteTheaterByID,
  deleteTheaterByName,
}