import { gql } from 'apollo-server-express'
import { merge } from 'lodash'
import booking from './booking'
import movie from './movie'
import reservedseat from './reservedseat'
import showtime from './showtime'
import theater from './theater'
import user from './user'


const moduleTypeDefs = [
  booking.typeDefs,
  movie.typeDefs,
  reservedseat.typeDefs,
  showtime.typeDefs,
  theater.typeDefs,
  user.typeDefs,
]

const moduleQueries = [
  booking.queries,
  movie.queries,
  reservedseat.queries,
  showtime.queries,
  theater.queries,
  user.queries,

]

const moduleMutations = [
  booking.mutations,
  movie.mutations,
  reservedseat.mutations,
  showtime.mutations,
  theater.mutations,
  user.mutations,

]


const typeDefs = gql`
  ${moduleTypeDefs.join('\n')}

  type Query {
    ${moduleQueries.join('\n')}
  }

  type Mutation {
    ${moduleMutations.join('\n')}
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`
const resolvers = merge(
  booking.resolvers,
  movie.resolvers,
  reservedseat.resolvers,
  showtime.resolvers,
  theater.resolvers,
  user.resolvers,

)

export {
  typeDefs,
  resolvers,
}