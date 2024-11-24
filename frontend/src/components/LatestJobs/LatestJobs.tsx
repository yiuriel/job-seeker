import { useEffect } from "react";
import { useLazyFetchJobsQuery } from "../../features/jobs/jobs.api";
import { useAppSelector } from "../../redux/hooks";
import { JobListItem } from "../JobListItem/JobListItem";
import { SwitchJobView } from "../SwitchJobView/SwitchJobView";
import { FilterJobs } from "../FilterJobs/FilterJobs";
import { jobSearchSelectors } from "../../features/search/job.search.slice";
import { jobsSelectors } from "../../features/jobs/jobs.slice";

export const LatestJobs = () => {
  const view = useAppSelector(jobsSelectors.view);
  const filters = useAppSelector(jobSearchSelectors.filters);

  const [fetch, { data }] = useLazyFetchJobsQuery();

  useEffect(() => {
    fetch({ ...filters });
  }, [fetch, filters]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        Latest Jobs <SwitchJobView />
      </div>
      <div className="w-full my-4">
        <FilterJobs />
      </div>
      <div
        className={`w-full ${
          view === "grid" ? "grid grid-cols-3 gap-4" : "flex flex-col"
        }`}
      >
        {data?.map((job) => (
          <JobListItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};
