import React from "react";

import MenuItem from "./MenuItem";

class MenuSec extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 3,
          title: "Pants",
          imgUrl:
            "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg"
        },
        {
          id: 4,
          title: "Shirts",
          imgUrl:
            "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg"
        },
        {
          id: 5,
          title: "Shoes",
          imgUrl:
            "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg"
        },
        {
          id: 6,
          title: "Hats",
          imgUrl:
            "https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg"
        }
      ]
    };
  }
  render() {
    const sections = this.state.sections.map(section => (
      <MenuItem key={section.id} section={section} />
    ));
    return <div className="menu-secondary">{sections}</div>;
  }
}

export default MenuSec;
