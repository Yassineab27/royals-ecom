const INITIAL_STATE = {
  sections: [
    {
      title: "Pants",
      _id: "5d80ce15f586160d10c1b45e",
      imgUrl:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg"
    },
    {
      title: "Jackets",
      _id: "5d80cc2ff586160d10c1b45d",
      imgUrl:
        "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg"
    },
    {
      title: "Shoes",
      _id: "5d7f8bf3d485440d40dd7156",
      imgUrl: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg"
    },
    {
      title: "Hats",
      _id: "5d7f81d74eca1e1f30c756c6",
      imgUrl: "https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg"
    }
  ]
};

const menuSecReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuSecReducer;
