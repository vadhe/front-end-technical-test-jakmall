const initialState = {
  email: "red",
  phone: "red",
};

const RatingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_START":
      return state;
    default:
      return state;
  }
};

export default RatingReducer;
