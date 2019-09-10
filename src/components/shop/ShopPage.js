import React, { Component } from "react";

import { connect } from "react-redux";
import { firestore, shopCollections } from "../../firebase/firebase.utils";
import { getCollections } from "../../actions";
import Collection from "./Collection";
import { selectCollections } from "../selectors/shopDataSelectors";

class ShopPage extends Component {
  unsubFromSnapshot = null;

  componentDidMount() {
    console.log("component mounted");
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async collectionsSnapshot => {
      // snapshot is an obj that has info about the collection its listening to
      const collections = shopCollections(collectionsSnapshot);
      // console.log(collections);
      this.props.getCollections(collections);
    });
  }

  render() {
    const { collections } = this.props;
    if (!collections) {
      return null;
    }

    return (
      <div className="shop-page container">
        <h1 className="text-center">Collections</h1>
        <div className="small-underline" />
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { collections: selectCollections(state) };
};

export default connect(
  mapStateToProps,
  { getCollections }
)(ShopPage);
