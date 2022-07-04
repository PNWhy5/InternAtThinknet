// EXAMPLE
import RESPONSE_ERROR from '../constants/responseError'
import showTimeModel from '../models/movie'
import catchResponse from '../libs/catchResponse'
import {SUCCESS_CREATED, SUCCESS_UPDATED, SUCCESS_DELETED,} from '../constants/success'


const getAll = async (req, res) => {
  try {
    const data = await showTimeModel.find().lean()
    if (!data) {
      throw RESPONSE_ERROR.No_DATA
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_ERROR,
      error,
    })
  }
}

const getByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await showTimeModel.findOne({ _id: _id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Showtime_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_BY_id_ERROR,
      error,
    })
  }
}

const getByMovie_id = async (req, res) => {
  const {
    Movie_id,
  } = req.body

  try {
    const data = await showTimeModel.find({ Movie_id: Movie_id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Showtime_BY_Movie_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_BY_Movie_id_ERROR,
      error,
    })
  }
}

const getByTheater_id = async (req, res) => {
  const {
    Theater_id,
  } = req.body

  try {
    const data = await showTimeModel.find({ Theater_id: Theater_id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Showtime_BY_Theater_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_BY_Theater_id_ERROR,
      error,
    })
  }
}

const getByTimeDate = async (req, res) => {
  const {
    Time,
    Date
  } = req.body

  try {
    const data = await showTimeModel.findOne({ Time: Time,Date : Date }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Showtime_BY_Time_Date_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_BY_Time_Date_ERROR,
      error,
    })
  }
}

const getByDate = async (req, res) => {
  const {
    Date,
  } = req.body

  try {
    const data = await showTimeModel.findOne({ Date: Date }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Showtime_BY_Date_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_BY_Date_ERROR,
      error,
    })
  }
}

const deleteByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await showTimeModel.deleteOne({ _id: _id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.DELETE_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.DELETE_BY_id_ERROR,
      error,
    })
  }
}

const create = async (req, res) => {
  const {
    Movie_id,
    Theater_id,
    Time,
    Date,
  } = req.body

  try {
    const data = await showTimeModel.create({ 
      Movie_id,
      Theater_id,
      Time,
      Date, })
    return res.status(201).json(data)
  } catch (error) {
    return catchResponse({
      ...RESPONSE_ERROR.CREATE_Showtime_ERROR,
      error,
      payload: {
        Movie_id,
      Theater_id,
      Time,
      Date,
      },
    })
  }
}

const updateByID = async (req, res) => {
  const {
    _id,
  } = req.params

  const data = await showTimeModel.findOne({ _id: _id }).lean()
  if (!data) {
    throw RESPONSE_ERROR.GET_Showtime_BY_id_NOT_FOUND
  }

  try {
    await showTimeModel.findOneAndUpdate({ _id: _id },{ ...req.body })
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Showtime_BY_id_ERROR,
      error,
    })
  }
}


export default {
  getAll,
  deleteByID,
  getByMovie_id,
  getByTheater_id,
  getByTimeDate,
  getByDate,
  getByID,
  create,
  updateByID,
}
