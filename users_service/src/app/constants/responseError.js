export default {
  INTERNAL_SERVER_ERROR: {
    httpStatus: 500,
    serviceCode: 'INTERNAL_SERVER_ERROR',
  },
  DELETE_BY_Username_NOT_FOUND: {
    httpStatus: 500,
    serviceCode: 'DELETE_BY_ID_NOT_FOUND',
  },
  GET_USER_BY_Username_Password_NOT_FOUND: {
    httpStatus: 404,
    serviceCode: 'GET_USER_BY_Username_Password_NOT_FOUND',
    description: 'Not found.',
  },
  GET_USER_ERROR: {
    httpStatus: 500,
    serviceCode: 'GET_USER_ERROR',
  },
  GET_USER_BY_Username_Password_ERROR: {
    httpStatus: 500,
    serviceCode: 'GET_USER_BY_Username_Password_ERROR',
  },
  GET_USER_BY_Username_NOT_FOUND: {
    httpStatus: 404,
    serviceCode: 'GET_USER_BY_Username_NOT_FOUND',
    description: 'Not found.',
  },
  GET_USER_BY_Username_ERROR: {
    httpStatus: 500,
    serviceCode: 'GET_USER_BY_Username_ERROR',
  },
  CREATE_USER_ERROR: {
    httpStatus: 500,
    serviceCode: 'CREATE_USER_ERROR',
  },
  INCORRECT_USERNAME_OR_PASSWORD: {
    httpStatus: 422,
    serviceCode: 'INCORRECT_USERNAME_OR_PASSWORD',
    description: 'The username or password is incorrect.',
  },
}
