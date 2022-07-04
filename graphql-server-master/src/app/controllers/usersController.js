import usersService from '../services/usersService'

const getUserList = async ()  => {
  try {
    const response = await usersService.getUserList()
    return response
  } catch (error) {
    console.log(error)
  }
}

const getUserByUsername = async (Username) => {
  try {
    console.log(Username)
    const response = await usersService.getUserByUsername(Username)
    return response
  } catch (error) {
    console.log(error)
  }
}

const getUserByUsernamePassword = async (userData) => {
  try {
    const response = await usersService.getUserByUsernamePassword(userData)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const createUser = async (userData) => {
  try {
    const response = await usersService.createUser(userData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (Username, userData) => {
  try {
    const response = await usersService.updateUser(Username, userData)
    return {
      data: response.data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (Username) => {
  try {
    const response = await usersService.deleteUser(Username)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  getUserList,
  getUserByUsername,
  getUserByUsernamePassword,
  createUser,
  updateUser,
  deleteUser,
}