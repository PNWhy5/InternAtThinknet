import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './app/schemas/rootSchema'
import { APP_ENV } from './app/config'

const app = express()
const env = APP_ENV || 'development'
const isNotProduction = env !== 'production'

const apolloServer = new ApolloServer({ 
  typeDefs,
  resolvers,
})

async function startserver() {
  await apolloServer.start()
  apolloServer.applyMiddleware({ app: app, path: '/graphql' })
}

startserver();

export {
  apolloServer,
}
export default app
