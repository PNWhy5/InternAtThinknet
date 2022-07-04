import executeValidator from './executeValidator'
import createTheaterRequest from './createUserRequest'

export default {
  createTheaterRequest: executeValidator(createTheaterRequest),
}
