import supertest from 'supertest'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from '../../src/routes/user'
import userModel from '../../src/models/user'

// connect mongo db
const database = 'mongodb://localhost:27017'
const option = {
  dbName: 'integrationTest',
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

describe('user router', () => {
  const app = express()
  app.use(express.json())
  app.use(userRouter)

  beforeAll(() => {
    mongoose.Promise = global.Promise
    mongoose.connect(database, option)
  })

  afterAll(async () => {
    await userModel.remove({ username: 'Createusername' })
    await mongoose.disconnect()
  })

  beforeEach(async () => {
    await userModel.remove({ username: 'testusername' })
    await userModel.create({
      username: 'testusername',
      firstname: 'testfirstname',
      lastname: 'testlastname',
    })
  })

  describe('route API GET /user', () => {
    it('username is not found in database', () => supertest(app)
      .get('/user')
      .query({ username: 'notfoundusername' })
      .then((response) => {
        expect(response.statusCode).toBe(404)
        expect(response.body).toEqual({
          message: 'Not found',
        })
      }))

    it('username is found in database', () => supertest(app)
      .get('/user')
      .query({ username: 'testusername' })
      .then((response) => {
        delete response.body._id
        delete response.body.createdAt
        delete response.body.updatedAt

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          username: 'testusername',
          firstname: 'testfirstname',
          lastname: 'testlastname',
          gender: 'MALE',
          job: 'PROGRAMMER',
        })
      }))
  })
  describe('route API POST /user', () => {
    it('Create success', () => supertest(app)
      .post('/user')
      .send({ 
        username: 'Createusername',
        firstname: 'testfirstname',
        lastname: 'testlastname',
      },)
      .then((response) => {
        delete response.body._id
        delete response.body.createdAt
        delete response.body.updatedAt

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          username: 'Createusername',
          firstname: 'testfirstname',
          lastname: 'testlastname',
          gender: 'MALE',
          job: 'PROGRAMMER',
        })
      }))
  })
  describe('route API PUT /user', () => {
    it('Update success', () => supertest(app)
      .put('/user')
      .send({ 
        username: 'testusername',
        firstname: 'Updatefirstname',
        lastname: 'Updatelastname',
      })
      .then((response) => {
        delete response.body._id
        delete response.body.createdAt
        delete response.body.updatedAt

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          username: 'testusername',
          firstname: 'Updatefirstname',
          lastname: 'Updatelastname',
          gender: 'MALE',
          job: 'PROGRAMMER',
        })
      }))
  })
  describe('route API DELETE /user', () => {
    it('Delete success', () => supertest(app)
      .delete('/user')
      .send({ username: 'testusername'})
      .then((response) => {
        
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          "n": 1,
          "ok": 1,
          "deletedCount": 1
        })
      }))
  })
})
