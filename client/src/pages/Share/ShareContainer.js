import React, { Component } from "react";
import Share from "./Share";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ViewerContext } from "../../context/ViewerProvider";
import { ALL_TAGS_QUERY } from "../../apollo/queries";
import style from "./styles";

class ShareContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_TAGS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `Error! {$error.message}`;
              if (data) return <Share viewer={viewer} tags={data.tags} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ShareContainer;
