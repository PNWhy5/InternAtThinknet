import executeValidator from './executeValidator'
import createBookingRequest from './createUserRequest'

export default {
  createBookingRequest: executeValidator(createBookingRequest),
}
