import Resolutions from "./resolutions";
import Goals from "../goals/goals";

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Resolution: {
    goals: resolution =>
      Goals.find({
        resolutionId: resolution._id
      }).fetch()
  },

  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({
        name,
        userId
      });
      return Goals.findOne(goalId);
    },
    toggleGoal(obj, { _id }) {
      const goal = Goals.findOne(_id);
      Goals.update(_id, {
        $set: {
          completed: !goal.completed
        }
      });
      return Goals.findOne(_id);
    }
  }
};
