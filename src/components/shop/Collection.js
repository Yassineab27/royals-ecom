import React from "react";

import CollectionItem from "./CollectionItem";

const Collection = props => {
  const { title, items } = props.collection;
  return (
    <div className="collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <div className="big-underline" />
    </div>
  );
};

export default Collection;
