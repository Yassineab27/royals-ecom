import React from "react";
import { connect } from "react-redux";
import Collection from "./Collection";
import { selectCollectionOverview } from "../selectors/shopDataSelectors";

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
  return { collections: selectCollectionOverview(state) };
};

export default connect(mapStateToProps)(CollectionOverview);
