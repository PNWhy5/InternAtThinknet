import moviesController from '../controllers/moviesController'
import moviesService from '../services/moviesService'

const typeDefs = `

  type Movie { 
    _id: ID!
    Name: String!
    Description: String
    Length: Int
    Picture: String
    createdAt: String
    updatedAt: String
  }

  type MovieListPayload {
    data: [Movie]
  }

  type MoviePayload {
    data: Movie
  }

  input CreateMovieInput {
    Name: String!
    Description: String
    Length: Int
    Picture: String
  }

  input FindMovieByNameInput {
    Name: String!
  }

  type ResponseUpdatingMoviePayload {
    httpCode: String
    message: String
  }

  type ResponseDeleteMoviePayload {
    acknowledged: Boolean
    deletedCount: Int
  }
`

const queries = `
  getMovieList: MovieListPayload
  getMovieByID(_id: ID!): MoviePayload
  getMovieByName(input: FindMovieByNameInput!): MoviePayload
`

const mutations = `
  createMovie(input: CreateMovieInput!): MoviePayload
  updateMovie(_id: String!, input: CreateMovieInput!): MoviePayload
  deleteMovieByID(_id: String!): ResponseDeleteMoviePayload
  deleteMovieByName(input: FindMovieByNameInput!): ResponseDeleteMoviePayload
`
const resolvers = {
  Query: {
    getMovieList: (_, args) => moviesController.getMovieList(),
    getMovieByID: (_, args) => moviesController.getMovieByID(args._id),
    getMovieByName: (_, args) => moviesController.getMovieByName(args.input),
  },
  Mutation : {
    createMovie: (_, args) => moviesController.createMovie(args.input),
    updateMovie: (_, args) => moviesController.updateMovie(args._id, args.input),
    deleteMovieByID: (_, args) => moviesController.deleteMovieByID(args._id),
    deleteMovieByName: (_, args) => moviesController.deleteMovieByName(args.input)
  },
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
