import { useEffect, useState } from "react";
import { useFetchJobsQuery } from "../../features/jobs/jobs.api";
import { Select } from "../Select/Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLocation } from "../../features/search/job.search.slice";

export const LocationFilter = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.jobSearch.location);
  const [locations, setLocations] = useState<string[]>([]);
  const { data } = useFetchJobsQuery();

  useEffect(() => {
    if (data) {
      const locationsSet = new Set<string>();
      data.forEach((job) => locationsSet.add(job.location));
      setLocations(["", ...Array.from(locationsSet)]);
    }
  }, [data]);

  return (
    <div>
      <Select
        selected={location}
        onChange={(value) => {
          dispatch(setLocation(value));
        }}
        options={locations.map((location) => ({
          label: location ? location : "All locations",
          value: location,
        }))}
        name="location"
      />
    </div>
  );
};
