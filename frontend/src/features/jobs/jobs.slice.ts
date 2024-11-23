import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface JobsState {
  view: "grid" | "list";
}

const initialState: JobsState = {
  view: "list",
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<"grid" | "list">) => {
      state.view = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeView } = jobsSlice.actions;

export default jobsSlice.reducer;
