import showtimesService from '../services/showtimesService'

const getShowtimeList = async ()  => {
  try {
    const response = await showtimesService.getShowtimeList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const getShowtimeByID = async (id) => {
  try {
    const response = await showtimesService.getShowtimeByID(id)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getShowtimeByMovieID = async (ShowtimeData) => {
  try {
    const response = await showtimesService.getShowtimeByMovieID(ShowtimeData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getShowtimeByTheaterID = async (ShowtimeData) => {
  try {
    const response = await showtimesService.getShowtimeByTheaterID(ShowtimeData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getShowtimeByDate = async (ShowtimeData) => {
  try {
    const response = await showtimesService.getShowtimeByDate(ShowtimeData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getShowtimeByTimeDate = async (ShowtimeData) => {
  try {
    const response = await showtimesService.getShowtimeByTimeDate(ShowtimeData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const createShowtime = async (ShowtimeData) => {
  try {
    const response = await showtimesService.createShowtime(ShowtimeData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateShowtime = async (id, ShowtimeData) => {
  try {
    const response = await showtimesService.updateShowtime(id, ShowtimeData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteShowtime = async (id) => {
  try {
    const response = await showtimesService.deleteShowtime(id)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

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