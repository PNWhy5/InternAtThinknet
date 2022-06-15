import blogController from '../controllers/blogController'
import blogService from '../services/blogService'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

const typeDefs = `
  scalar Date

  type MyType {
    created: Date
  }

  enum BookCategories {
    SPORT
    ENTERTAINMENT
    NEWS
  }

  interface Product {
    _id: ID!
    name: String!
    Stock: Int!
  }

  type Device implements Product {
    _id: ID!
    name: String!
    Stock: Int!
    MFD: Date
    weight: Float
    TIS: String!
  }

  type Book2 implements Product {
    _id: ID!
    name: String!
    Stock: Int!
    category: BookCategories
    Page: Int
    ISBN: String!
    Publisher: String
  }

  type Consumable implements Product {
    _id: ID!
    name: String!
    Stock: Int!
    MFG: Date
    EXP: Date
    detail: String
    Vendor: String
    Distributor: String
    FDA: String!
  }

  type ProductPayload {
    data: Product
  }

  input CreateProductInput {
    name: String!
    Stock: Int!
    MFD: Date
    weight: Float
    TIS: String
    category: BookCategories
    Page: Int
    ISBN: String
    Publisher: String
    MFG: Date
    EXP: Date
    detail: String
    Vendor: String
    Distributor: String
    FDA: String
  }

  input UpdateProductInput {
    name: String
    Stock: Int
    MFD: Date
    weight: Float
    TIS: String
    category: BookCategories
    Page: Int
    ISBN: String
    Publisher: String
    MFG: Date
    EXP: Date
    detail: String
    Vendor: String
    Distributor: String
    FDA: String
  }

  type ResponseUpdatingPayload {
    httpCode: String
    message: String
  }

  type ProductListInterfacePayload {
    data: [Product]
  }

  input Receipt {
    num: Int!
  }
`

const queries = `
  getAllProduct: ProductListInterfacePayload
`

const mutations = `
  createProduct(input: CreateProductInput!): ProductPayload
  updateProduct(_id: ID!, input: UpdateProductInput!): ResponseUpdatingPayload
  deleteProduct(_id: ID!): ResponseUpdatingPayload
  buyProduct(_id: ID!, input: Receipt!): ProductPayload
`

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    value = new Date(value);
    return value // Convert outgoing Date to integer for JSON
  },
  // parseValue(value) {
  //   return new Date(value); // Convert incoming integer to Date
  // },
  // parseLiteral(ast) {
  //   if (ast.kind === Kind.INT) {
  //     return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
  //   }
  //   return null; // Invalid hard-coded value (not an integer)
  // },
});

const resolvers = {
  Query: {
    getAllProduct: (_, args) => blogController.getProductList(),
  },
  Mutation: {
    createProduct: (_, args) => blogController.createProduct(args.input),
    updateProduct: (_, args) => blogController.updateProduct(args._id, args.input),
    deleteProduct: (_, args) => blogController.deleteProduct(args._id),
    buyProduct: (_, args) => blogController.buyProduct(args._id, args.input)
  },
  Product: {
    __resolveType(response) {
      if (response.TIS) {
        return 'Device'
      }
      if (response.ISBN) {
        return 'Book2'
      }
      if (response.FDA) {
        return 'Consumable'
      }
      return null
    }
  },
  Date: dateScalar,
}


export default {
  typeDefs,
  queries,
  mutations,
  resolvers,
  csrfPrevention: true,
}
