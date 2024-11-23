import { FC } from "react";
import { Job } from "../../features/jobs/jobs.types";
import { JobTitle } from "./JobTitle";
import { JobDescription } from "./JobDescription";
import { JobInfo } from "./JobInfo";
import { JobSalary } from "./JobSalary";
import { JobDetails } from "./JobDetails";
import { JobTags } from "./JobTags";

export const JobListItem: FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="bg-blue-900 shadow-md rounded-lg p-4 mb-4">
      <JobTitle title={job.title} id={job.id} />
      <JobDescription description={job.description} />
      <JobInfo company={job.company} location={job.location} />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <JobSalary salaryMin={job.salaryMin} salaryMax={job.salaryMax} />
        <JobDetails type={job.type} category={job.category} />
      </div>
      <JobTags tags={job.tags} />
    </div>
  );
};
