// EXAMPLE
import RESPONSE_ERROR from '../constants/responseError'
import ReservedSeatModel from '../models/reaservedseat'
import catchResponse from '../libs/catchResponse'
import {SUCCESS_CREATED, SUCCESS_UPDATED, SUCCESS_DELETED,} from '../constants/success'


const getAll = async (req, res) => {
  try {
    const data = await ReservedSeatModel.find().lean()
    if (!data) {
      throw RESPONSE_ERROR.No_DATA
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Reserved_seat_ERROR,
      error,
    })
  }
}

const getByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await ReservedSeatModel.findOne({ _id: _id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Reserved_seat_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Reserved_seat_BY_id_ERROR,
      error,
    })
  }
}

const getByShowtime_id = async (req, res) => {
  const {
    Showtime_id,
  } = req.body

  try {
    const data = await ReservedSeatModel.find({ Showtime_id: Showtime_id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Reserved_seat_BY_Showtime_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Reserved_seat_BY_Showtime_id_ERROR,
      error,
    })
  }
}

const deleteByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await ReservedSeatModel.deleteOne({ _id: _id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.DELETE_Reserved_seat_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.DELETE_Reserved_seat_BY_id_ERROR,
      error,
    })
  }
}

const deleteByShowtime_id = async (req, res) => {
  const {
    Showtime_id,
  } = req.body

  try {
    const data = await ReservedSeatModel.deleteOne({ Showtime_id: Showtime_id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.DELETE_Reserved_seat_BY_Showtime_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.DELETE_Reserved_seat_BY_Showtime_id_ERROR,
      error,
    })
  }
}

const create = async (req, res) => {
  const {
    Showtime_id,
    Number,
    Type,
  } = req.body

  try {
    const data = await ReservedSeatModel.create({ 
      Showtime_id,
    Number,
    Type, })
    return res.status(201).json(data)
  } catch (error) {
    return catchResponse({
      ...RESPONSE_ERROR.CREATE_Theater_ERROR,
      error,
      payload: {
        Showtime_id,
    Number,
    Type,
      },
    })
  }
}

const updateByid = async (req, res) => {
  const {
    Reference_code,
  } = req.params

  const data = await ReservedSeatModel.findOne({ Reference_code: Reference_code }).lean()
  if (!data) {
    throw RESPONSE_ERROR.GET_Reserved_seat_BY_id_NOT_FOUND
  }

  try {
    await ReservedSeatModel.findOneAndUpdate({ Reference_code: Reference_code },{ ...req.body })
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Reserved_seat_BY_Showtime_id_ERROR,
      error,
    })
  }
}


export default {
  getAll,
  deleteByID,
  deleteByShowtime_id,
  getByShowtime_id,
  getByID,
  create,
  updateByid,
}
