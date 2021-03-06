import { ADD_FEATURE, REMOVE_FEATURE } from "./actions/carActions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const reducer = (state = initialState, action) => {
  console.log("action in the reducer", action);
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.newFeature],
        },
        additionalPrice: state.additionalPrice + action.payload.additionalPrice,
      };
    case REMOVE_FEATURE:
      const featuresAfterRemoving = state.car.features.filter((item) => {
        return item.id === action.payload.id;
      });
      return {
        ...state,
        car: {
          ...state.car,
          features: featuresAfterRemoving,
        },
        additionalPrice: state.additionalPrice - action.payload.additionalPrice,
      };
  }

  return state;
};
