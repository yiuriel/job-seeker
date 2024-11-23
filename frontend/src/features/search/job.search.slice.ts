import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface JobSearchState {
  query: string;
}

const initialState: JobSearchState = {
  query: "",
};

export const jobSearchSlice = createSlice({
  name: "jobSearch",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuery } = jobSearchSlice.actions;

export default jobSearchSlice.reducer;
