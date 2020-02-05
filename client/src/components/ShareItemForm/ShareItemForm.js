import React, { Fragment } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { TextField, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import styles from "./styles.js";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { ADD_ITEM_MUTATION } from "../../apollo/queries.js";
import { Mutation } from "react-apollo";
import validate from "./helpers/validation";

const ShareItemForm = props => {
  const { input, tags, classes } = props;

  const saveItem = async (data, addItem) => {
    try {
      const { title, description } = data;
      const localizedTags = applyTags(data.tags, tags);
      let submit = await addItem({
        variables: {
          item: {
            title,
            description,
            tags: localizedTags
          }
        }
      });
      return submit;
      // do something with response
    } catch (error) {
      // do something with error
    }
  };

  const validate = values => {
    console.log(values);
  };

  const applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };

  const dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: applyTags(values.tags || [], allTags)
    });
  };

  return (
    <Mutation mutation={ADD_ITEM_MUTATION}>
      {(addItem, { data }) => (
        <ItemPreviewContext.Consumer>
          {({ updatePreview, resetPreview }) => (
            <Form
              validate={validate.bind(this)}
              onSubmit={fields => {
                saveItem(fields, addItem);
              }}
              validate={values => {
                const errors = {};
                if (!values.title) {
                  errors.title = "Item name required";
                }
                if (!values.description) {
                  errors.description = "Description required";
                }
                return errors;
              }}
              render={({ handleSubmit, pristine }) => {
                console.log(data);
                return (
                  <form onSubmit={handleSubmit}>
                    <FormSpy
                      subscription={{ values: true }}
                      onChange={({ values }) => {
                        if (values) {
                          dispatchUpdate(values, tags, updatePreview);
                        }
                        return "";
                      }}
                    />
                    <Field
                      name="title"
                      render={({ input, meta }) => {
                        return (
                          <Fragment>
                            <TextField
                              {...input}
                              fullWidth
                              className={classes.textField}
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </Fragment>
                        );
                      }}
                    />
                    <Field
                      name="description"
                      render={({ input, meta }) => {
                        return (
                          <Fragment>
                            <TextField
                              {...input}
                              fullWidth
                              className={classes.textField}
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </Fragment>
                        );
                      }}
                    />
                    <div className={classes.tagsContainer}>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Household Items"
                        />
                        Household Items
                        <HomeIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Electronics"
                        />
                        Electronics
                        <HomeIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Tools"
                        />
                        Tools
                        <HomeIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Musical Instruments"
                        />
                        Musical Instruments
                        <HomeIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Books"
                        />
                        Books
                        <HomeIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Sporting Goods"
                        />
                        Sporting Goods
                        <HomeIcon />
                      </label>
                      <label className={classes.tagIcons}>
                        <Field
                          name="tags"
                          component="input"
                          type="checkbox"
                          value="Happiness"
                        />
                        Happiness
                        <HomeIcon />
                      </label>
                    </div>
                    <button type="submit" disabled={pristine}>
                      Share
                    </button>
                  </form>
                );
              }}
            />
          )}
        </ItemPreviewContext.Consumer>
      )}
    </Mutation>
  );
};

export default withStyles(styles)(ShareItemForm);
