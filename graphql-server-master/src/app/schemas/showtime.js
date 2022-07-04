import showtimesController from '../controllers/showtimesController'
import showtimesService from '../services/showtimesService'

const typeDefs = `

  type Showtime { 
    _id: ID!
    Movie_id: String!
    Theater_id: String!
    Time: String
    Date: String
    createdAt: String
    updatedAt: String
  }

  type ShowtimeListPayload {
    data: [Showtime]
  }

  type ShowtimePayload {
    data: Showtime
  }

  input CreateShowtimeInput {
    Movie_id: String!
    Theater_id: String!
    Time: String
    Date: String
  }

  input FindShowtimeByMovie_idInput {
    Movie_id: String!
  }

  input FindShowtimeByTheater_idInput {
    Theater_id: String!
  }

  input FindShowtimeByDateInput {
    Date: String!
  }

  input FindShowtimeByTimeDateInput {
    Time: String!
    Date: String!
  }

  type ResponseUpdatingShowtimePayload {
    httpCode: String
    message: String
  }

  type ResponseDeleteShowtimePayload {
    acknowledged: Boolean
    deletedCount: Int
  }
`

const queries = `
getShowtimeList: ShowtimeListPayload
getShowtimeByID(_id: ID!): ShowtimePayload
getShowtimeByMovieID(input: FindShowtimeByMovie_idInput!): ShowtimeListPayload
getShowtimeByTheaterID(input: FindShowtimeByTheater_idInput!): ShowtimeListPayload
getShowtimeByDate(input: FindShowtimeByDateInput!): ShowtimePayload
getShowtimeByTimeDate(input: FindShowtimeByTimeDateInput!): ShowtimePayload
`

const mutations = `
createShowtime(input: CreateShowtimeInput!): ShowtimePayload
updateShowtime(_id: ID!, input: CreateShowtimeInput!): ShowtimePayload
deleteShowtimeByID(_id: ID!): ResponseDeleteShowtimePayload
`
const resolvers = {
  Query: {
    getShowtimeList: (_, args) => showtimesController.getShowtimeList(),
    getShowtimeByID: (_, args) => showtimesController.getShowtimeByID(args._id),
    getShowtimeByMovieID: (_, args) => showtimesController.getShowtimeByMovieID(args.input),
    getShowtimeByTheaterID: (_, args) => showtimesController.getShowtimeByTheaterID(args.input),
    getShowtimeByDate: (_, args) => showtimesController.getShowtimeByDate(args.input),
    getShowtimeByTimeDate: (_, args) => showtimesController.getShowtimeByTimeDate(args.input),

  },
  Mutation : {
    createShowtime: (_, args) => showtimesController.createShowtime(args.input),
    updateShowtime: (_, args) => showtimesController.updateShowtime(args._id, args.input),
    deleteShowtimeByID: (_, args) => showtimesController.deleteShowtime(args._id),
  },
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
