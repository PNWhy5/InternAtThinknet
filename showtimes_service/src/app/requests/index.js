import executeValidator from './executeValidator'
import createShowtimeRequest from './createUserRequest'

export default {
  createShowtimeRequest: executeValidator(createShowtimeRequest),
}
