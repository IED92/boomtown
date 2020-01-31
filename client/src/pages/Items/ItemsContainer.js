// import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
        {({ loading, error, data }) => {
          const { items } = data;
          // if (loading) return <FullScreenLoader />;
          if (loading) return "Learning...";
          if (error) return `Error! ${error.message}`;
          return <Items items={items} />;
        }}
      </Query>
    );
  }
}

export default ItemsContainer;
