import reservedseatsController from '../controllers/reservedseatsController'
import reservedseatsService from '../services/reservedseatsService'

const typeDefs = `

  type ReservedSeat { 
    _id: ID!
    Showtime_id: String!
    Number: String
    Type: String
    createdAt: String
    updatedAt: String
  }

  type ReservedSeatListPayload {
    data: [ReservedSeat]
  }

  type ReservedSeatPayload {
    data: ReservedSeat
  }

  input CreateReservedSeatInput {
    Showtime_id: String!
    Number: String!
    Type: String!
  }

  input FindReservedSeatByShowtime_idInput {
    Showtime_id: String!
  }

  type ResponseUpdatingReservedSeatPayload {
    httpCode: String
    message: String
  }

  type ResponseDeleteReservedSeatPayload {
    acknowledged: Boolean
    deletedCount: Int
  }
`

const queries = `
  getReservedSeatList: ReservedSeatListPayload
  getReservedSeatByID(_id: ID!): ReservedSeatPayload
  getReservedSeatByShowtimeID(input: FindReservedSeatByShowtime_idInput!): ReservedSeatListPayload
`

const mutations = `
  createReservedSeat(input: CreateReservedSeatInput!): ReservedSeatPayload
  updateReservedSeat(_id: ID!, input: CreateReservedSeatInput!): ReservedSeatPayload
  deleteReservedSeatByID(_id: ID!): ResponseDeleteReservedSeatPayload
  deleteReservedSeatByShowtimeID(input: FindReservedSeatByShowtime_idInput!): ResponseDeleteReservedSeatPayload
`
const resolvers = {
  Query: {
    getReservedSeatList: (_, args) => reservedseatsController.getReservedSeatList(),
    getReservedSeatByID: (_, args) => reservedseatsController.getReservedSeatByID(args._id),
    getReservedSeatByShowtimeID: (_, args) => reservedseatsController.getReservedSeatByShowtimeID(args.input),
  },
  Mutation : {
    createReservedSeat: (_, args) => reservedseatsController.createReservedSeat(args.input),
    updateReservedSeat: (_, args) => reservedseatsController.updateReservedSeat(args._id, args.input),
    deleteReservedSeatByID: (_, args) => reservedseatsController.deleteReservedSeatByID(args._id),
    deleteReservedSeatByShowtimeID: (_, args) => reservedseatsController.deleteReservedSeatByShowtimeID(args.input)
  },
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
