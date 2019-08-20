import React from "react";

import MenuItem from "./MenuItem";

class MenuMain extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: "Mens",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911330_960_720.jpg",
          size: "large-img"
        },
        {
          id: 2,
          title: "Womens",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg",
          size: "large-img"
        }
      ]
    };
  }
  render() {
    const sections = this.state.sections.map(section => (
      <MenuItem section={section} key={section.id} />
    ));

    return <div className="menu-main">{sections}</div>;
  }
}

export default MenuMain;
