import executeValidator from './request'
import create from './create'
import getByID from './getByID'
import updateByID from './updateByID'

export default {
  create: executeValidator(create),
  getByID: executeValidator(getByID),
  updateByID: executeValidator(updateByID),
}
