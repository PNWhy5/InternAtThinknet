// EXAMPLE
import RESPONSE_ERROR from '../constants/responseError'
import userModel from '../models/user'
import catchResponse from '../libs/catchResponse'
import {SUCCESS_CREATED, SUCCESS_UPDATED, SUCCESS_DELETED,SUCCESS,FAIL} from '../constants/success'

const getAll = async (req, res) => {

  try {
    const data = await userModel.find().lean()
    if (!data) {
      throw RESPONSE_ERROR.No_DATA
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_USER_ERROR,
      error,
    })
  }
}

const getByUsernamePassword = async (req, res) => {
  const {
    Username,
    Password,
  } = req.body

  try {
    const data = await userModel.findOne({ Username: Username,Password: Password }).lean()
    if (!data) {
      return res.status(404).json(FAIL)
    }
    return res.status(200).json(SUCCESS)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.FAIL,
      error,
    })
  }
}

const getByUsername = async (req, res) => {
  const {
    Username,
  } = req.params

  try {
    const data = await userModel.findOne({ Username: Username }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_USER_BY_Username_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_USER_BY_Username_ERROR,
      error,
    })
  }
}

const deleteByUsername = async (req, res) => {
  const {
    Username,
  } = req.params

  try {
    const data = await userModel.deleteOne({ Username: Username }).lean()
    if (!data) {
      throw RESPONSE_ERROR.DELETE_BY_Username_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_USER_BY_Username_ERROR,
      error,
    })
  }
}

const create = async (req, res) => {
  const {
    Username,
    Password
  } = req.body

  try {
    const data = await userModel.create({ Username,Password })
    return res.status(201).json(data)
  } catch (error) {
    return catchResponse({
      ...RESPONSE_ERROR.CREATE_USER_ERROR,
      error,
      payload: {
        Username,
        Password
      },
    })
  }
}

const updatePasswordByUsername = async (req, res) => {
  const {
    Username,
  } = req.params

  const data = await userModel.findOne({ Username: Username }).lean()
  if (!data) {
    throw RESPONSE_ERROR.GET_USER_BY_Username_NOT_FOUND
  }

  try {
    await userModel.findOneAndUpdate({ Username: Username },{ ...req.body })
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_USER_BY_Username_ERROR,
      error,
    })
  }
}


export default {
  getAll,
  deleteByUsername,
  getByUsername,
  getByUsernamePassword,
  create,
  updatePasswordByUsername,
}
