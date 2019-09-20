import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentCollection } from "../../actions";

import { selectCollection } from "../selectors/shopDataSelectors";
import CollectionItem from "../shop/CollectionItem";
import Footer from "../layout/Footer";
import Loader from "../layout/Loader";

class CollectionPage extends Component {
  componentDidMount() {
    const { getCurrentCollection, match } = this.props;
    getCurrentCollection(match.params.collectionId);
  }

  render() {
    const { collection } = this.props;
    console.log(collection);

    if (!collection) {
      return <Loader />;
    }

    return (
      <div className="collection">
        <h2 className="title text-center">{collection.title}</h2>
        <div className="small-underline"></div>
        <div className="preview my-3">
          {collection.items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    collection: selectCollection(state)
  };
};

export default connect(
  mapStateToProps,
  { getCurrentCollection }
)(CollectionPage);
