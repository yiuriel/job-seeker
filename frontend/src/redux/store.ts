import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "../features/jobs/jobs.api";
import jobSearchReducer from "../features/search/job.search.slice";
import jobsReducer from "../features/jobs/jobs.slice";

export const store = configureStore({
  reducer: {
    jobSearch: jobSearchReducer,
    jobs: jobsReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
