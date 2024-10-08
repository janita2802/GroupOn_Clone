// actions.js

export const setAttractions = (attractions) => {
  return {
    type: "SET_ATTRACTIONS",
    payload: attractions, // Pass attractions list as payload
  };
};

export const toggleHeart = (index) => {
  return {
    type: "TOGGLE_HEART",
    payload: index, // Pass the index of the attraction whose heart state needs to be toggled
  };
};

export const setCity = (city) => {
  return {
    type: "SET_CITY",
    payload: city, // Pass the selected city as payload
  };
};

export const setLoading = (loading) => {
  return {
    type: "LOADING",
    payload: loading, // Pass loading state (true/false) as payload
  };
};
