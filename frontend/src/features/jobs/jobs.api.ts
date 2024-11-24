import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "./jobs.types";
import { jobsMockData } from "./mockData";

let mockData = [...jobsMockData];

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/jobs" }),
  endpoints: (builder) => ({
    fetchJobs: builder.query<
      Job[],
      {
        search?: string;
        salaryMin?: number;
        salaryMax?: number;
        location?: string;
      } | void
    >({
      queryFn: async (args) => {
        const filteredData = mockData.filter((job) => {
          if (args?.search) {
            return job.title
              .toLowerCase()
              .includes((args?.search ?? "").toLowerCase());
          }
          if (args?.salaryMin) {
            return job.salaryMin >= args.salaryMin;
          }
          if (args?.salaryMax) {
            return job.salaryMax <= args.salaryMax;
          }
          if (args?.location) {
            return job.location
              .toLowerCase()
              .includes((args?.location ?? "").toLowerCase());
          }
          return true;
        });
        return { data: filteredData };
      },
    }),
    fetchJobById: builder.query<Job, string>({
      queryFn: async (id) => {
        const foundJob = mockData.find((job) => job.id === id);
        if (foundJob) {
          return { data: foundJob };
        }
        throw new Error(`Job with id ${id} not found`);
      },
    }),
    postJob: builder.mutation<Job[], Omit<Job, "id">>({
      queryFn: async (newJob) => {
        mockData = [
          {
            ...newJob,
            id: `${mockData.length + 1}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            tags: ["Mock Tag 1", "Mock Tag 2"],
            type: "full-time",
            category: "Mock Category 1",
          },
          ...mockData,
        ];
        return { data: mockData };
      },
    }),
  }),
});

export const {
  useFetchJobsQuery,
  useLazyFetchJobsQuery,
  usePostJobMutation,
  useFetchJobByIdQuery,
  useLazyFetchJobByIdQuery,
} = jobsApi;
