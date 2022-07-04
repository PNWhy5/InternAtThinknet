import request from '../lib/request'
import { URL_Users_SERVICE } from '../config'

const getUserList = () => request.get(`${URL_Users_SERVICE}/allusers`)
const getUserByUsername = (Username) => request.get(`${URL_Users_SERVICE}/users/${Username}`)
const getUserByUsernamePassword = (UserData) => request.getBody(`${URL_Users_SERVICE}/users/`,{...UserData})
const createUser = (UserData) => request.post(`${URL_Users_SERVICE}/users`, { ...UserData })
const updateUser = (Username, userData) => request.put(`${URL_Users_SERVICE}/users/${Username}`, { ...userData })
const deleteUser = (Username) => request.remove(`${URL_Users_SERVICE}/users/${Username}`)

export default {
    getUserList,
    getUserByUsername,
    getUserByUsernamePassword,
    createUser,
    updateUser,
    deleteUser,
}


