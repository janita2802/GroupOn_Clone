// attractionsReducer.js

const initialState = {
  attractions: [], // Initialize attractions as an empty array
  heartStates: [], // Heart states for each attraction
  loading: false, // Loading state to indicate fetching is in progress
  selectedCity: "New York", // The city currently selected
};

// Define actions and update the state based on the action type
const attractionsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action for setting attractions list
    case "SET_ATTRACTIONS":
      return {
        ...state,
        attractions: action.payload, // Payload should be an array of attractions
        heartStates: new Array(action.payload.length).fill(false), // Set heartStates to false initially for each attraction
      };
    // Action for toggling heart icon for a specific attraction
    case "TOGGLE_HEART":
      return {
        ...state,
        heartStates: state.heartStates.map((state, index) =>
          index === action.payload ? !state : state
        ),
      };
    // Action for setting the selected city
    case "SET_CITY":
      return {
        ...state,
        selectedCity: action.payload,
      };
    // Action for setting loading state
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state; // Return unchanged state for unknown actions
  }
};

export default attractionsReducer;
