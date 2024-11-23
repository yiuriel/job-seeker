import { FC } from "react";
import { Job } from "../../features/jobs/jobs.types";

export const JobListItem: FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="bg-blue-900 shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold text-blue-200">{job.title}</h2>
      <p className="text-blue-300">{job.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-sm text-blue-400">{job.company}</span>
        <span className="text-sm text-blue-400">{job.location}</span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-sm font-bold text-blue-500">
          <span className="bg-blue-500 rounded-md px-2 py-1 text-blue-100">
            Salary: ${job.salaryMin} - ${job.salaryMax}
          </span>
        </span>
      </div>
    </div>
  );
};
