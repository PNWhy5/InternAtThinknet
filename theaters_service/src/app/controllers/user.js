// EXAMPLE
import RESPONSE_ERROR from '../constants/responseError'
import theaterModel from '../models/theater'
import catchResponse from '../libs/catchResponse'
import {SUCCESS_CREATED, SUCCESS_UPDATED, SUCCESS_DELETED,} from '../constants/success'

const getAll = async (req, res) => {
  try {
    const data = await theaterModel.find().lean()
    if (!data) {
      throw RESPONSE_ERROR.No_DATA
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Theater_ERROR,
      error,
    })
  }
}

const getByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await theaterModel.findOne({ _id: _id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Theater_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Theater_BY_id_ERROR,
      error,
    })
  }
}

const getByName = async (req, res) => {
  const {
    Name,
  } = req.body

  try {
    const data = await theaterModel.findOne({ Name: Name }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Theater_BY_Name_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Theater_BY_Name_ERROR,
      error,
    })
  }
}

const deleteByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await theaterModel.deleteOne({ _id: _id }).lean()
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

const deleteByName = async (req, res) => {
  const {
    Name,
  } = req.body

  try {
    const data = await theaterModel.deleteOne({ Name: Name }).lean()
    if (!data) {
      throw RESPONSE_ERROR.DELETE_BY_Name_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.DELETE_BY_Name_ERROR,
      error,
    })
  }
}

const create = async (req, res) => {
  const {
    Name,
  } = req.body

  try {
    const data = await theaterModel.create({ 
      Name, })
    return res.status(201).json(data)
  } catch (error) {
    return catchResponse({
      ...RESPONSE_ERROR.CREATE_Theater_ERROR,
      error,
      payload: {
        Name,
      },
    })
  }
}

const updateByID = async (req, res) => {
  const {
    _id,
  } = req.params

  const data = await theaterModel.findOne({ _id: _id }).lean()
  if (!data) {
    throw RESPONSE_ERROR.GET_Theater_BY_id_NOT_FOUND
  }

  try {
    await theaterModel.findOneAndUpdate({ _id: _id },{ ...req.body })
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Theater_BY_id_ERROR,
      error,
    })
  }
}

export default {
  getAll,
  deleteByName,
  deleteByID,
  getByName,
  getByID,
  create,
  updateByID,
}
