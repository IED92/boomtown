import React, { Component } from "react";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import Item from "./Items";
import FullScreenLoader from "../../components/FullScreenLoader";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `Error! ${error.message}`;
              if (data)
                return (
                  <div
                    className="itembox"
                    style={{ backgroundColor: "#212121" }}
                  >
                    <Item items={data.items} />;
                  </div>
                );
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
