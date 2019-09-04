import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../shop/CollectionItem";

import { selectCollection } from "../selectors/shopDataSelectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2 className="title text-center">{collection.title}</h2>
      <div className="small-underline"></div>
      <div className="preview my-3">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collection)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
