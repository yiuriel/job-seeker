import { JobDetailView } from "../components/JobDetailView/JobDetailView";

export const JobDetailsPage = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div className="w-1/2">
        <JobDetailView />
      </div>
    </div>
  );
};
