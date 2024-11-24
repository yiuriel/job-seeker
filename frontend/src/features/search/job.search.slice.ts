import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface JobSearchState {
  query: string;
  salaryMin?: number;
  salaryMax?: number;
  location?: string;
}

const initialState: JobSearchState = {
  query: "",
  salaryMin: undefined,
  salaryMax: undefined,
  location: undefined,
};

export const jobSearchSlice = createSlice({
  name: "jobSearch",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSalaryMin: (state, action: PayloadAction<number>) => {
      state.salaryMin = action.payload === 0 ? undefined : action.payload;
    },
    setSalaryMax: (state, action: PayloadAction<number>) => {
      state.salaryMax = action.payload === 0 ? undefined : action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

const jobSearchSelector = {
  query: (state: RootState) => state.jobSearch.query,
  salaryMin: (state: RootState) => state.jobSearch.salaryMin,
  salaryMax: (state: RootState) => state.jobSearch.salaryMax,
  location: (state: RootState) => state.jobSearch.location,
};
export const jobSearchSelectors = {
  filters: createSelector(
    jobSearchSelector.query,
    jobSearchSelector.salaryMin,
    jobSearchSelector.salaryMax,
    jobSearchSelector.location,
    (query, salaryMin, salaryMax, location) => ({
      query,
      salaryMin,
      salaryMax,
      location,
    })
  ),
};

// Action creators are generated for each case reducer function
export const { setQuery, setSalaryMin, setSalaryMax, setLocation } =
  jobSearchSlice.actions;

export default jobSearchSlice.reducer;
