import userController from '../../src/controllers/user'
import userModel from '../../src/models/user'
import userFormatter from '../../src/libs/formatter'

jest.mock('../../src/models/user')
jest.mock('../../src/libs/formatter')

describe('getUser function test suit', () => {
  afterEach(() => {
    userModel.find.mockRestore()
    userFormatter.user.mockRestore()
  })

  it('username is not found in database', async () => {
    const req = { query: { username: 'testusername' } }
    const res = { status: jest.fn(() => ({ json: jest.fn() })) }

    userModel.find.mockResolvedValueOnce(null)

    await userController.getUser(req, res)

    expect(userModel.find).toHaveBeenCalledTimes(1)
    expect(userModel.find).toHaveBeenCalledWith({ username: 'testusername' })
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.status.mock.results[0].value.json).toHaveBeenCalledTimes(1)
    expect(res.status.mock.results[0].value.json).toHaveBeenCalledWith({
      message: 'Not found',
    })
  })

  it('username is found in database', async () => {
    const req = { query: { username: 'testusername' } }
    const res = { json: jest.fn() }

    userModel.find.mockResolvedValueOnce({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })

    userFormatter.user.mockReturnValueOnce({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test',
    })

    await userController.getUser(req, res)

    expect(userModel.find).toHaveBeenCalledTimes(1)
    expect(userModel.find).toHaveBeenCalledWith({ username: 'testusername' })
    expect(userFormatter.user).toHaveBeenCalledTimes(1)
    expect(userFormatter.user).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test',
    })
  })
})

describe('createUser function test suit', () => {
  afterEach(() => {
    userModel.find.mockRestore()
    userFormatter.user.mockRestore()
  })

  it('Create success', async() => {
    const req = { body: { 
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
      }
    }
    const res = { json: jest.fn() }

    const temp = {
      toObject: jest.fn(() => ({
        username: 'testusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
      }))
    }

    userModel.create.mockResolvedValueOnce(temp)

    userFormatter.user.mockReturnValueOnce({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test',
    })

    await userController.createUser(req, res)

    expect(temp.toObject).toHaveBeenCalledTimes(1)
    expect(userModel.create).toHaveBeenCalledTimes(1)
    expect(userModel.create).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })
    expect(userFormatter.user).toHaveBeenCalledTimes(1)
    expect(userFormatter.user).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test',
    })
  })
})

describe('updateUser function test suit', () => {
  afterEach(() => {
    userModel.find.mockRestore()
    userFormatter.user.mockRestore()
  })

  it('Update success',async () => {
    const req = { body: { 
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      }
    }
    const res = { json: jest.fn() }

    userModel.findOneAndUpdate.mockResolvedValueOnce({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test'
    })

    userFormatter.user.mockReturnValueOnce({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test',
    })

    await userController.updateUser(req,res)

    expect(userModel.findOneAndUpdate).toHaveBeenCalledTimes(1)
    expect(userModel.findOneAndUpdate).toHaveBeenCalledWith({
      username: 'testusername'},{
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })
    expect(userFormatter.user).toHaveBeenCalledTimes(1)
    expect(userFormatter.user).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test'
    })
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
      gender: 'male',
      job: 'test'
    })
  })
})

describe('removeUser function test suit', () => {
  afterEach(() => {
    userModel.find.mockRestore()
  })

  it('Remove success',async () => {
    const req = { body: { username: 'testusername'}}
    const res = { json: jest.fn() }

    userModel.remove.mockResolvedValueOnce({
      "n": 1,
      "ok": 1,
      "deletedCount": 1
    })

    await userController.removeUser(req,res)

    expect(userModel.remove).toHaveBeenCalledTimes(1)
    expect(userModel.remove).toHaveBeenCalledWith({ username: 'testusername'})
    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({
      "n": 1,
      "ok": 1,
      "deletedCount": 1
    })
  })
})
