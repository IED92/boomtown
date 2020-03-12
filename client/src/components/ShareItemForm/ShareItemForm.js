import React, { Fragment } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { Box, Grid, Button, TextField, Typography } from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DevicesOutlinedIcon from "@material-ui/icons/DevicesOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import styles from "./styles.js";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { ADD_ITEM_MUTATION, VIEWER_QUERY } from "../../apollo/queries.js";
import { Mutation } from "react-apollo";
import validate from "./helpers/validation";

const ShareItemForm = props => {
  const { input, tags } = props;
  const style = styles();
  const refetchQueries = [{ query: VIEWER_QUERY }];

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
    <Mutation mutation={ADD_ITEM_MUTATION} refetchQueries={refetchQueries}>
      {(addItem, { data }) => (
        <ItemPreviewContext.Consumer>
          {({ updatePreview, resetPreview }) => (
            <div>
              <Typography className={style.headertext}>
                Share. Borrow. Prosper.
              </Typography>
              <Form
                validate={validate.bind(this)}
                onSubmit={fields => {
                  saveItem(fields, addItem);
                  resetPreview();
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
                                label="Name your item"
                                className={style.textField}
                              />
                              {meta.error && meta.touched && (
                                <span className={style.error}>
                                  {meta.error}
                                </span>
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
                                label="Describe your item"
                                className={style.textField}
                              />
                              {meta.error && meta.touched && (
                                <span className={style.error}>
                                  {meta.error}
                                </span>
                              )}
                            </Fragment>
                          );
                        }}
                      />
                      <Typography className={style.tagheader}>
                        Add Tags:
                      </Typography>
                      <Box className={style.box}>
                        <Grid container justify="space-between" xs={10}>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Household Items"
                                className={style.fields}
                              />
                              Household Items
                              <HomeOutlinedIcon className={style.icon} />
                            </label>
                          </Grid>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Electronics"
                                className={style.fields}
                              />
                              Electronics
                              <DevicesOutlinedIcon className={style.icon} />
                            </label>
                          </Grid>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Tools"
                                className={style.fields}
                              />
                              Tools
                              <BuildOutlinedIcon className={style.icon} />
                            </label>
                          </Grid>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Musical Instruments"
                                className={style.fields}
                              />
                              Musical Instruments
                              <MusicNoteOutlinedIcon className={style.icon} />
                            </label>
                          </Grid>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Books"
                                className={style.fields}
                              />
                              Books
                              <BookOutlinedIcon className={style.icon} />
                            </label>
                          </Grid>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Sporting Goods"
                                className={style.fields}
                              />
                              Sporting Goods
                              <FitnessCenterIcon className={style.icon} />
                            </label>
                          </Grid>
                          <Grid className={style.item} item>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Happiness"
                                className={style.fields}
                              />
                              Happiness
                              <SentimentVerySatisfiedOutlinedIcon
                                className={style.icon}
                              />
                            </label>
                          </Grid>
                        </Grid>
                      </Box>
                      <Button
                        className={style.button}
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        onSubmit={handleSubmit}
                        disabled={pristine}
                      >
                        Share
                      </Button>
                    </form>
                  );
                }}
              />
            </div>
          )}
        </ItemPreviewContext.Consumer>
      )}
    </Mutation>
  );
};

export default ShareItemForm;
