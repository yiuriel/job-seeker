import { FC } from "react";

export const JobSalary: FC<{ salaryMin: number; salaryMax: number }> = ({
  salaryMin,
  salaryMax,
}) => (
  <span className="text-sm font-bold text-blue-500">
    <span className="bg-blue-500 rounded-md px-2 py-1 text-blue-100">
      ${salaryMin} - ${salaryMax}
    </span>
  </span>
);
