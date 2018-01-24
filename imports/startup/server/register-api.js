import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
  type Query {
  hi: String
  resolutions: [Resolution]
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
    resolutions() {
      return [
        {
          _id: 'Generic String',
          name: 'Get stuff done!',
        },
        {
          _id: 'Second Generic String',
          name: 'Get stuff done for the second time!',
        },
      ];
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
