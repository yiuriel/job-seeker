import { useNavigate } from "react-router";

export const JobPostButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded border-0"
      onClick={() => {
        navigate("/post-job");
      }}
    >
      Post a job
    </button>
  );
};
