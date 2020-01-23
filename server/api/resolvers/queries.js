const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);

      return user;
    } catch (err) {
      throw new ApolloError(err);
    }
  },
  async items(parent, { filter }, { pgResource }, info) {
    try {
      const items = await pgResource.getItems(filter);
      return items;
    } catch (err) {
      throw new ApolloError(err);
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      const tags = await pgResource.getTags();
      return tags;
    } catch (err) {
      throw new ApolloError(err);
    }
  }
});

module.exports = queryResolvers;