import theatersController from '../controllers/theatersController'
import theatersService from '../services/theatersService'

const typeDefs = `

  type Theater { 
    _id: ID!
    Name: String!
    createdAt: String
    updatedAt: String
  }

  type TheaterListPayload {
    data: [Theater]
  }

  type TheaterPayload {
    data: Theater
  }

  input CreateTheaterInput {
    Name: String!
  }

  input FindTheaterByNameInput {
    Name: String!
  }

  type ResponseUpdatingTheaterPayload {
    httpCode: String
    message: String
  }

  type ResponseDeleteTheaterPayload {
    acknowledged: Boolean
    deletedCount: Int
  }
`

const queries = `
  getTheaterList: TheaterListPayload
  getTheaterByID(_id: ID!): TheaterPayload
  getTheaterByName(input: FindTheaterByNameInput!): TheaterPayload
`

const mutations = `
  createTheater(input: CreateTheaterInput!): TheaterPayload
  updateTheater(_id: ID!, input: CreateTheaterInput!): TheaterPayload
  deleteTheaterByID(_id: ID!): ResponseDeleteTheaterPayload
  deleteTheaterByName(input: FindTheaterByNameInput!): ResponseDeleteTheaterPayload
`
const resolvers = {
  Query: {
    getTheaterList: (_, args) => theatersController.getTheaterList(),
    getTheaterByID: (_, args) => theatersController.getTheaterByID(args._id),
    getTheaterByName: (_, args) => theatersController.getTheaterByName(args.input),
  },
  Mutation : {
    createTheater: (_, args) => theatersController.createTheater(args.input),
    updateTheater: (_, args) => theatersController.updateTheater(args._id, args.input),
    deleteTheaterByID: (_, args) => theatersController.deleteTheaterByID(args._id),
    deleteTheaterByName: (_, args) => theatersController.deleteTheaterByName(args.input)
  },
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
