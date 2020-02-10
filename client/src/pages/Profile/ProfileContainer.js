import React, { Component } from "react";
import Profile from "./Profile";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import ItemGrid from "../../components/ItemGrid";
import styles from "../Profile/styles";

const classes = styles();

class ProfileContainer extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <ViewerContext.Consumer>
        {({ viewer, loading }) => {
          if (loading) return <FullScreenLoader />;
          console.log(viewer);
          return (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: id || viewer.id }}
            >
              {({ loading, error, data }) => {
                console.log(data);
                if (loading) return <FullScreenLoader />;
                if (error) return `Error! ${error.message}`;
                if (data)
                  return (
                    <div className={classes.itemBox}>
                      <Profile items={viewer} />;
                      <ItemGrid items={data.items} />;
                    </div>
                  );
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ProfileContainer;
