import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    image: String
  }

  type Resource {
    id: ID!
    title: String!
    description: String
    url: String!
    thumbnail: String
    category: String!
    upvotes: Int
  }

  type Query {
    getResources: [Resource]
    getResourceById(id: ID!): Resource
  }

  type Mutation {
    addResource(
      title: String!
      url: String!
      category: String!
      description: String
    ): Resource
  }
`;