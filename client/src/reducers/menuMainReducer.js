const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "Mens",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911330_960_720.jpg",
      size: "large-img",
      _id: "5d80d127feaa9f18f8dcfd04"
    },
    {
      id: 2,
      title: "Womens",
      imgUrl:
        "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg",
      size: "large-img",
      _id: "5d80cf9ffeaa9f18f8dcfd03"
    }
  ]
};

const menuMainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuMainReducer;
