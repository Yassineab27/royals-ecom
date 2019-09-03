const INITIAL_STATE = {
  sections: [
    {
      id: 3,
      title: "Pants",
      imgUrl:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg"
    },
    {
      id: 4,
      title: "Jackets",
      imgUrl:
        "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg"
    },
    {
      id: 5,
      title: "Shoes",
      imgUrl: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg"
    },
    {
      id: 6,
      title: "Hats",
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
