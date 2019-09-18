import React from "react";
import { Link } from "react-router-dom";

import CollectionItem from "./CollectionItem";

const Collection = props => {
  const { title, items, _id } = props.collection;
  return (
    <div className="collection">
      <Link to={`/shop/${_id}`}>
        <h2 className="title">{title.toUpperCase()}</h2>
      </Link>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <Link className="btn" to={`/shop/${_id}`}>
        <i className="fas fa-info-circle"></i> See More
      </Link>
      <div className="big-underline" />
    </div>
  );
};

export default Collection;
