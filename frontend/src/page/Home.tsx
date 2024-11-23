import { Divider } from "../components/Divider/Divider";
import { JobPostButton } from "../components/JobPostButton/JobPostButton";
import { JobSearch } from "../components/JobSearch/JobSearch";
import { LatestJobs } from "../components/LatestJobs/LatestJobs";

export const HomePage = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div className="w-1/2">
        <JobPostButton />
        <Divider />
        <JobSearch />
      </div>
      <div className="w-4/5 mt-4">
        <LatestJobs />
      </div>
    </div>
  );
};
