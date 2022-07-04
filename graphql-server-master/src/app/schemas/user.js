import usersController from '../controllers/usersController'
import usersService from '../services/usersService'

const typeDefs = `

  type User { 
    _id: ID!
    Username: String!
    Password: String!
    createdAt: String
    updatedAt: String
  }

  type UserListPayload {
    data: [User]
  }

  type UserPayload {
    data: User
  }

  input CreateUserInput {
    Username: String!
    Password: String!
  }

  input FindUserByUsernameInput {
    Username: String!
  }

  input FindUserByUsernamePasswordInput {
    Username: String!
    Password: String!
  }

  type ResponseGetUserPayload {
    httpCode: String
    message: String
  }

  type ResponseDeleteUserPayload {
    acknowledged: Boolean
    deletedCount: Int
  }
`

const queries = `
  getUserList: UserListPayload
  getUserByUsername(Username: String!): UserPayload
  getUserByUsernamePassword(input: FindUserByUsernamePasswordInput!): ResponseGetUserPayload
`

const mutations = `
  createUser(input: CreateUserInput!): UserPayload
  updateUser(Username: String!, input: CreateUserInput!): UserPayload
  deleteUser(Username: String!): ResponseDeleteUserPayload
`
const resolvers = {
  Query: {
    getUserList: (_, args) => usersController.getUserList(),
    getUserByUsername: (_, args) => usersController.getUserByUsername(args.Username),
    getUserByUsernamePassword: (_, args) => usersController.getUserByUsernamePassword(args.input),
  },
  Mutation : {
    createUser: (_, args) => usersController.createUser(args.input),
    updateUser: (_, args) => usersController.updateUser(args.Username, args.input),
    deleteUser: (_, args) => usersController.deleteUser(args.Username),
  },
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
}
