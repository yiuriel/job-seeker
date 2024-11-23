import { FC } from "react";

export const JobInfo: FC<{ company: string; location: string }> = ({
  company,
  location,
}) => (
  <div className="mt-2 flex justify-between items-center">
    <span className="text-sm text-blue-400">{company}</span>
    <span className="text-sm text-blue-400">{location}</span>
  </div>
);
