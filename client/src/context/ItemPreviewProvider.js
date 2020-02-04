import React from "react";

export const ItemPreviewContext = React.createContext();

const initialState = {
  ownerid: {},
  created: Date(),
  imageurl: "http://place-puppy.com/400x300",
  title: "This is the title",
  description: "This is the description",
  tags: []
};

const ItemPreviewProvider = props => {
  // React hook item uses setItem to update its state
  const [item, setItem] = React.useState({ item: initialState });

  const resetPreview = () => {
    setItem(initialState);
  };

  const updatePreview = itemInput => {
    const newItem = { item: { ...item, ...itemInput } };
    setItem(newItem);
  };

  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        updatePreview: updatePreview,
        resetPreview: resetPreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

export default ItemPreviewProvider;
