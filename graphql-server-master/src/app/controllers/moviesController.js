import movieService from '../services/moviesService'

const getMovieList = async ()  => {
  try {
    const response = await movieService.getMovieList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const getMovieByID = async (id) => {
  try {
    const response = await movieService.getMovieByID(id)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getMovieByName = async (MovieData) => {
  try {
    const response = await movieService.getMovieByName(MovieData)
    return response
  } catch (error) {
    console.log(error)
  }
}

const createMovie = async (MovieData) => {
  try {
    const response = await movieService.createMovie(MovieData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateMovie = async (id, MovieData) => {
  try {
    const response = await movieService.updateMovie(id, MovieData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteMovieByID = async (id) => {
  try {
    const response = await movieService.deleteMovieByID(id)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleteMovieByName = async (MovieData) => {
  try {
    const response = await movieService.deleteMovieByName(MovieData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getMovieList,
  getMovieByID,
  getMovieByName,
  createMovie,
  updateMovie,
  deleteMovieByID,
  deleteMovieByName,
}