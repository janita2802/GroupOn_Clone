import { createSlice } from "@reduxjs/toolkit";

export const attractionsSlice = createSlice({
  name: "attractions",
  initialState: {
    data: null,
    heartStates: {},
    selectedCity: "Chicago",
    visibleCount: 9,
    loading: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setHeartState: (state, action) => {
      const { index } = action.payload;
      state.heartStates[index] = !state.heartStates[index];
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      state.visibleCount = 9; // Reset visible count on city change
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVisibleCount: (state) => {
      state.visibleCount += 9; // Load more posts logic
    },
  },
});

export const {
  setData,
  setHeartState,
  setSelectedCity,
  setLoading,
  setVisibleCount,
} = attractionsSlice.actions;

export const selectAttractions = (state) => state.attractions;

export default attractionsSlice.reducer;
