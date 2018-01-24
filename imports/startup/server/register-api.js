import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
  type Query {
  hi: String
}
`;

const typeDefs = [
  testSchema,
  ResolutionsSchema,
];

const resolvers = {
  Query: {
    hi() {
      return 'Hello Max';
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
