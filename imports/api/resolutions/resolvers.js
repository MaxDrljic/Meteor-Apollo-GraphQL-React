import Resolutions from './resolutions';

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    },
  },

  Mutation: {
    createResolution() {
      /* const resolutionId = Resolutions.insert({
        name: 'Test Res',
      }); */
    },
  },
};
