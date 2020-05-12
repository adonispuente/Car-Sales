export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (feature) => {
  console.log("add action creater called");
  return {
    type: ADD_FEATURE,
    payload: {
      additionalPrice: feature.price,
      newFeature: feature,
    },
  };
};
