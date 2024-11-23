import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setQuery } from "../../features/search/job.search.slice";

export const JobSearch = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.jobSearch.query);

  return (
    <input
      className="py-2 px-4 w-full text-slate-100 rounded-md placeholder:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="text"
      placeholder="Search jobs"
      value={query}
      onChange={(e) => {
        dispatch(setQuery(e.target.value));
      }}
    />
  );
};
