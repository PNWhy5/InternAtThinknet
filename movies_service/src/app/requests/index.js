import executeValidator from './executeValidator'
import createMovieRequest from './createUserRequest'

export default {
  createMovieRequest: executeValidator(createMovieRequest),
}
