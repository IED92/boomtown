import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer }}>
            {({ loading, error, data }) => {
              const { items } = data;
              // if (loading) return <FullScreenLoader />;
              if (loading) return <div>Loading...</div>;
              if (error) return `Error! ${error.message}`;
              return items !== null && items !== undefined ? (
                <Items items={items} />
              ) : (
                <p>No items</p>
              );
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
