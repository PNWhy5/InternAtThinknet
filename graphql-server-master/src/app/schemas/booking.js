import bookingController from '../controllers/bookingsController'
import bookingService from '../services/bookingsService'

const typeDefs = `

  type Booking { 
    _id: ID!
    Username: String!
    Reference_code: String!
    createdAt: String
    updatedAt: String
  }

  type BookingListPayload {
    data: [Booking]
  }

  type BookingPayload {
    data: Booking
  }

  input CreateBookingInput {
    Username: String!
    Reference_code: String!
  }

  input FindBookingByUsernameInput {
    Username: String!
  }

  type ResponseUpdatingBookPayload {
    httpCode: String
    message: String
  }

  type ResponseDeleteBookPayload {
    acknowledged: Boolean
    deletedCount: Int
  }
`

const queries = `
  getBookingList: BookingListPayload
  getBookingByReference_code(Reference_code: String!): BookingPayload
  getBookingByUsername(input: FindBookingByUsernameInput!): BookingListPayload
`

const mutations = `
  createBooking(input: CreateBookingInput!): BookingPayload
  updateBooking(Reference_code: String!, input: CreateBookingInput!): BookingPayload
  deleteBookingByCode(Reference_code: String!): ResponseDeleteBookPayload
  deleteBookingByUsername(input: FindBookingByUsernameInput!): ResponseDeleteBookPayload
`
const resolvers = {
  Query: {
    getBookingList: (_, args) => bookingController.getBookingList(),
    getBookingByReference_code: (_, args) => bookingController.getBookingByReference_code(args.Reference_code),
    getBookingByUsername: (_, args) => bookingController.getBookingByUsername(args.input),
  },
  Mutation : {
    createBooking: (_, args) => bookingController.createBooking(args.input),
    updateBooking: (_, args) => bookingController.updateBooking(args.Reference_code, args.input),
    deleteBookingByCode: (_, args) => bookingController.deleteBookingByCode(args.Reference_code),
    deleteBookingByUsername: (_, args) => bookingController.deleteBookingByUsername(args.input)
  },
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
