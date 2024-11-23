import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "./jobs.types";

let mockData: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    description: "Develop and maintain applications.",
    salaryMin: 1000,
    salaryMax: 2000,
    location: "Remote",
    company: "Tech Corp",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["JavaScript", "React", "Node.js"],
    type: "full-time",
    category: "IT",
  },
  {
    id: "2",
    title: "Data Analyst",
    description: "Analyze business data to generate insights.",
    salaryMin: 1500,
    salaryMax: 2500,
    location: "New York",
    company: "Data Inc",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["Python", "SQL", "Pandas"],
    type: "full-time",
    category: "Data Science",
  },
  {
    id: "3",
    title: "Mock Post 1",
    description: "Mock Description 1",
    salaryMin: 1000,
    salaryMax: 2000,
    location: "Mock Location 1",
    company: "Mock Company 1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["Mock Tag 1", "Mock Tag 2"],
    type: "full-time",
    category: "Mock Category 1",
  },
];

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/jobs" }),
  endpoints: (builder) => ({
    fetchJobs: builder.query<Job[], { search?: string } | void>({
      queryFn: async (args) => {
        const filteredData = args?.search
          ? mockData.filter((job) =>
              job.title
                .toLowerCase()
                .includes((args?.search ?? "").toLowerCase())
            )
          : mockData;
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
