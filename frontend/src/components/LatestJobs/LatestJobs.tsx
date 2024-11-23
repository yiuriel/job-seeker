import { useEffect } from "react";
import { useLazyFetchJobsQuery } from "../../features/jobs/jobs.api";
import { useAppSelector } from "../../redux/hooks";
import { JobListItem } from "../JobListItem/JobListItem";
import { SwitchJobView } from "../SwitchJobView/SwitchJobView";

export const LatestJobs = () => {
  const view = useAppSelector((state) => state.jobs.view);
  const search = useAppSelector((state) => state.jobSearch.query);

  const [fetch, { data }] = useLazyFetchJobsQuery();

  useEffect(() => {
    fetch({ search });
  }, [fetch, search]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        Latest Jobs <SwitchJobView />
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
