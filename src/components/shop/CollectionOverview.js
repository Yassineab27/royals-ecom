import React from "react";
import { connect } from "react-redux";
import Collection from "./Collection";
import { selectCollections } from "../selectors/shopDataSelectors";

const CollectionOverview = props => {
  return (
    <React.Fragment>
      {props.collections.map(collection => (
        <Collection key={collection.id} collection={collection} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { collections: selectCollections(state) };
};

export default connect(mapStateToProps)(CollectionOverview);
