// EXAMPLE
import RESPONSE_ERROR from '../constants/responseError'
import {SUCCESS_CREATED, SUCCESS_UPDATED, SUCCESS_DELETED,} from '../constants/success'
import bookingModel from '../models/movie'
import catchResponse from '../libs/catchResponse'

const getAll = async (req, res) => {

  try {
    const data = await bookingModel.find().lean()
    if (!data) {
      throw RESPONSE_ERROR.No_DATA
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_ALL_Booking_ERROR,
      error,
    })
  }
}

const getByCode = async (req, res) => {
  const {
    Reference_code,
  } = req.params

  try {
    const data = await bookingModel.findOne({ Reference_code: Reference_code }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Booking_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Booking_BY_id_ERROR,
      error,
    })
  }
}

const getByUsername = async (req, res) => {
  const {
    Username,
  } = req.body

  try {
    const data = await bookingModel.find({ Username: Username }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_All_Booking_BY_Name_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_All_Booking_BY_Name_ERROR,
      error,
    })
  }
}

const deleteByCode = async (req, res) => {
  const {
    Reference_code,
  } = req.params

  try {
    const data = await bookingModel.deleteOne({ Reference_code: Reference_code }).lean()
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

const deleteByUsername = async (req, res) => {
  const {
    Username,
  } = req.body

  try {
    const data = await bookingModel.delete({ Username: Username }).lean()
    if (!data) {
      throw RESPONSE_ERROR.DELETE_BY_Username_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.DELETE_BY_Username_ERROR,
      error,
    })
  }
}

const create = async (req, res) => {
  const {
    Username,
    Reference_code,
  } = req.body

  try {
    const data = await bookingModel.create({ 
      Username,
      Reference_code, 
    })
    return res.status(201).json(data)
  } catch (error) {
    return catchResponse({
      ...RESPONSE_ERROR.CREATE_Booking_ERROR,
      error,
      payload: {
        Username,
        Reference_code, 
      },
    })
  }
}

const updateByReference_code = async (req, res) => {
  const {
    Reference_code,
  } = req.params

  const data = await bookingModel.findOne({ Reference_code: Reference_code }).lean()
  if (!data) {
    throw RESPONSE_ERROR.GET_Booking_BY_id_NOT_FOUND
  }

  try {
    await bookingModel.findOneAndUpdate({ Reference_code: Reference_code },{ ...req.body })
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Booking_BY_id_ERROR,
      error,
    })
  }
}

export default {
  getAll,
  deleteByUsername,
  deleteByCode,
  getByUsername,
  getByCode,
  create,
  updateByReference_code,
}
