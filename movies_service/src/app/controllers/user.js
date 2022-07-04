// EXAMPLE
import RESPONSE_ERROR from '../constants/responseError'
import movieModel from '../models/movie'
import catchResponse from '../libs/catchResponse'
import {SUCCESS_CREATED, SUCCESS_UPDATED, SUCCESS_DELETED,} from '../constants/success'


// const getByUsernamePassword = async (req, res) => {
//   const {
//     Username,
//     Password,
//   } = req.body

//   try {
//     const data = await movieModel.findOne({ Username,Password }).lean()
//     if (!data) {
//       throw RESPONSE_ERROR.INCORRECT_USERNAME_OR_PASSWORD
//     }
//     return res.status(200).json(data)
//   } catch (error) {
//     if (error.serviceCode) {
//       return catchResponse(error)
//     }
//     return catchResponse({
//       ...RESPONSE_ERROR.GET_USER_BY_Username_Password_ERROR,
//       error,
//     })
//   }
// }
const getAll = async (req, res) => {

  try {
    const data = await movieModel.find().lean()
    if (!data) {
      throw RESPONSE_ERROR.No_DATA
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Movie_ERROR,
      error,
    })
  }
}

const getByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await movieModel.findOne({ _id }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Movie_BY_id_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Movie_BY_id_ERROR,
      error,
    })
  }
}

const getByName = async (req, res) => {
  const {
    Name,
  } = req.body

  try {
    const data = await movieModel.findOne({ Name }).lean()
    if (!data) {
      throw RESPONSE_ERROR.GET_Movie_BY_Name_NOT_FOUND
    }
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Movie_BY_Name_ERROR,
      error,
    })
  }
}

const deleteByID = async (req, res) => {
  const {
    _id,
  } = req.params

  try {
    const data = await movieModel.deleteOne({ _id }).lean()
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
    const data = await movieModel.deleteOne({ Name }).lean()
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
    Description,
    Length,
    Picture
  } = req.body

  try {
    const data = await movieModel.create({ 
      Name,
      Description,
      Length,
      Picture })
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

const updateByID = async (req, res) => {
  const {
    _id,
  } = req.params

  const data = await movieModel.findOne({ _id: _id }).lean()
  if (!data) {
    throw RESPONSE_ERROR.GET_Movie_BY_id_NOT_FOUND
  }

  try {
    await movieModel.findOneAndUpdate({ _id: _id },{ ...req.body })
    return res.status(200).json(data)
  } catch (error) {
    if (error.serviceCode) {
      return catchResponse(error)
    }
    return catchResponse({
      ...RESPONSE_ERROR.GET_Movie_BY_id_ERROR,
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
