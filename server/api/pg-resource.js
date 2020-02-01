// Tag query string
function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}
module.exports = postgres => {
  return {
    // Create User
    async createUser({ fullname, email, password }) {
      const insertNewUser = {
        text: `INSERT INTO USERS (name, email, password), values ($1, $2, $3) RETURNING *`,
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(insertNewUser);
        return user.rows[0];
      } catch (err) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },

    // Get user and pass from user with specified email
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: `SELECT * FROM users WHERE email=$1`,
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (err) {
        throw "User was not found.";
      }
    },

    // Get user by userID
    async getUserById(id) {
      const findUserQuery = {
        text: "SELECT * FROM USERS WHERE id=$1",
        values: id ? [id] : []
      };
      try {
        const user = await postgres.query(findUserQuery);
        return user.rows[0];
      } catch (err) {
        throw err + "User with that ID was not found";
      }
    },

    //Get Items
    async getItems(idToOmit) {
      const getItemsQuery = {
        text: `SELECT * FROM items WHERE ownerid != $1`,
        values: idToOmit ? [idToOmit] : []
      };
      try {
        const items = await postgres.query(getItemsQuery);
        return items.rows;
      } catch (err) {
        throw "Items not found";
      }
    },

    // Get items for user passing the users ID
    async getItemsForUser(id) {
      const getItemsForUser = {
        text: `SELECT * FROM items WHERE ownerid = $1;`,
        values: [id]
      };
      try {
        const items = await postgres.query(getItemsForUser);
        return items.rows;
      } catch (err) {
        throw "Items for user not found";
      }
    },

    // Get borrowed items for user, passing the users ID
    async getBorrowedItemsForUser(id) {
      const getBorrowedItemsForUser = {
        text: `SELECT * FROM items
          WHERE borrowid = $1`,
        values: [id]
      };
      try {
        const items = await postgres.query(getBorrowedItemsForUser);
        return items.rows;
      } catch (err) {
        throw "Borrowed items not found";
      }
    },

    // Get tags
    async getTags() {
      const getTags = `SELECT * FROM tags`;
      try {
        const tags = await postgres.query(getTags);
        return tags.rows;
      } catch (err) {
        throw "Tags not found";
      }
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `
            SELECT * From tags 
            INNER JOIN itemtags 
            ON tags.id = itemtags.tagid 
            WHERE itemtags.itemid = $1`,
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (err) {
        throw "Tags for item not found";
      }
    },
    async saveNewItem({ item, user }) {
      try {
        return new Promise((resolve, reject) => {
          postgres.connect((err, client, done) => {
            try {
              // Begin postgres transaction
              client.query("BEGIN", async err => {
                const { title, description, tags } = item;

                const itemsQuery = {
                  text: `INSERT INTO items (title, description, ownerid)
                  values ($1,$2,$3) RETURNING *;`,
                  values: [title, description, user.id]
                };

                const newItem = await postgres.query(itemsQuery);
                const itemid = newItem.rows[0].id;

                let values = tagsQueryString([...tags], itemid, "");
                const tagsQuery = {
                  text: `INSERT INTO itemtags (tagid, itemid)
                  VALUES ${values}`,
                  values: tags.map(tag => tag.id)
                };

                const newTags = await postgres.query(tagsQuery);

                client.query("COMMIT", err => {
                  if (err) {
                    throw err;
                  }
                  // release the client back to the pool
                  done();
                  resolve(newItem.rows[0]);
                  // -------------------------------
                });
              });
            } catch (e) {
              // Something went wrong
              client.query("ROLLBACK", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
              });
              switch (true) {
                default:
                  throw e;
              }
            }
          });
        });
      } catch (err) {
        throw "There was an error";
      }
    }
  };
};
