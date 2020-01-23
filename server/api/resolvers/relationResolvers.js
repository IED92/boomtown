const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items({ id }, args, { pgResource }, info) {
      try {
        const items = await pgResource.getItemsForUser(id);
        return items;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async borrowed({ id }, args, { pgResource }, info) {
      try {
        const items = await pgResource.getBorrowedItemsForUser(id);
        return items;
      } catch (err) {
        throw new ApolloError(err);
      }
    }
  },

  Item: {
    async itemowner({ itemowner }, args, { pgResource }, info) {
      try {
        const owner = await pgResource.getUserbyId(itemowner);
        return owner;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async borrower({ borrower }, args, { pgResource }, info) {
      try {
        if (borrower) {
          const borrowUser = await pgResource.getUserbyId(borrower);
          return borrowUser;
        } else {
          return null;
        }
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async tags({ id }, args, { pgResource, info }) {
      try {
        const tags = await pgResource.getTagsForItem(id);
        return tags;
      } catch (err) {
        return new ApolloError(err);
      }
    }
  }
};

module.exports = relationResolvers;
