import { LocationFilter } from "./LocationFilter";
import { SalaryFilter } from "./SalaryFilter";

export const FilterJobs = () => {
  return (
    <div className="flex gap-4 items-center">
      FilterJobs
      <SalaryFilter />
      <LocationFilter />
    </div>
  );
};
