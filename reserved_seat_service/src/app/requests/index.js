import executeValidator from './executeValidator'
import createReservedSeatRequest from './createUserRequest'

export default {
  createReservedSeatRequest: executeValidator(createReservedSeatRequest),
}
