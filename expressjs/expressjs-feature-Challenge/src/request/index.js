import executeValidator from './request'
import create from './create'
import findByID from './findByID'
import Delete from './delete'
import gpax from './gpax'

export default {
    create: executeValidator(create),
    findByID: executeValidator(findByID),
    Delete: executeValidator(Delete),
    gpax: executeValidator(gpax),
}
