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

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = (feature) => {
  console.log("remove action creater called");
  return {
    type: REMOVE_FEATURE,
    payload: {
      additionalPrice: feature.price,
      newFeature: feature,
    },
  };
};
