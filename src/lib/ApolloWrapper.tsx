"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

// Configure Apollo Client for frontend GraphQL requests
const client = new ApolloClient({
  // Connect to our GraphQL API endpoint
  link: new HttpLink({
    uri: "/api/graphql",
  }),
  // In-memory cache for query results
  cache: new InMemoryCache(),
});

// Provider component to wrap the app with Apollo Client
export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}