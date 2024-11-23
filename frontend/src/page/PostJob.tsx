import { JobPostForm } from "../components/JobPostForm/JobPostForm";

export const PostJobPage = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold my-4">Post a job</h1>
        <JobPostForm />
      </div>
    </div>
  );
};
