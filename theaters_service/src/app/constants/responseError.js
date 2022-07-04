export default {
  INTERNAL_SERVER_ERROR: {
    httpStatus: 500,
    serviceCode: 'INTERNAL_SERVER_ERROR',
  },
  No_DATA: {
    httpStatus: 404,
    serviceCode: 'Data Not Found',
  },
  DELETE_BY_Name_ERROR: {
    httpStatus: 500,
    serviceCode: 'DELETE_BY_Name_ERROR',
  },
  DELETE_BY_id_ERROR: {
    httpStatus: 500,
    serviceCode: 'DELETE_BY_ID_ERROR',
  },
  DELETE_BY_Name_NOT_FOUND: {
    httpStatus: 404,
    serviceCode: 'DELETE_BY_Name_NOT_FOUND',
    description: 'Not found.',
  },
  DELETE_BY_id_NOT_FOUND: {
    httpStatus: 404,
    serviceCode: 'DELETE_BY_id_NOT_FOUND',
    description: 'Not found.',
  },
  GET_Theater_BY_Name_NOT_FOUND: {
    httpStatus: 404,
    serviceCode: 'GET_Theater_BY_Name_NOT_FOUND',
    description: 'Not found.',
  },
  GET_Theater_BY_Name_ERROR: {
    httpStatus: 500,
    serviceCode: 'GET_Theater_BY_Name_ERROR',
  },
  GET_Theater_BY_id_NOT_FOUND: {
    httpStatus: 404,
    serviceCode: 'GET_Theater_BY_id_NOT_FOUND',
    description: 'Not found.',
  },
  GET_Theater_BY_id_ERROR: {
    httpStatus: 500,
    serviceCode: 'GET_Theater_BY_id_ERROR',
  },
  GET_Theater_ERROR: {
    httpStatus: 500,
    serviceCode: 'GET_Theater_ERROR',
  },
  CREATE_Theater_ERROR: {
    httpStatus: 500,
    serviceCode: 'CREATE_Theater_ERROR',
  },
}
