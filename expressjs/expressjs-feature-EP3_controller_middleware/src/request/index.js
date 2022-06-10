import executeValidator from './request'
import getByID from './getByID'
import updateByID from './updateByID'

export default {
  getByID: executeValidator(getByID),
  updateByID: executeValidator(updateByID),
}
