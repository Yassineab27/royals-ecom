import React from "react";

const CategoryPage = props => {
  return (
    <div>
      <h2>{props.match.params.category}</h2>
    </div>
  );
};

export default CategoryPage;
