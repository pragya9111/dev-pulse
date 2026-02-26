import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';

// Initialize Apollo Server with GraphQL schema and resolvers
const server = new ApolloServer({
  typeDefs,    // GraphQL schema definitions
  resolvers,   // Query and mutation resolvers
});

// Create Next.js API route handler for Apollo Server
const handler = startServerAndCreateNextHandler(server);

// Export handler for both GET and POST requests
export { handler as GET, handler as POST };