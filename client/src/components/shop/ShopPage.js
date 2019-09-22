import React, { Component } from "react";

import { connect } from "react-redux";

import { getCollections } from "../../actions";
import { selectCollections } from "../selectors/shopDataSelectors";
import Collection from "./Collection";
import Footer from "../layout/Footer";
import Loader from "../layout/Loader";

class ShopPage extends Component {
  componentDidMount() {
    this.props.getCollections();
  }

  render() {
    const { collections } = this.props;
    if (!collections) {
      return <Loader />;
    }

    return (
      <div className="shop-page container">
        <h1 className="text-center">Collections</h1>
        <div className="small-underline" />
        {collections.map(collection => (
          <Collection key={collection._id} collection={collection} />
        ))}
        <Footer />
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
