import { FC } from "react";

export const DetailItem: FC<{ label: string }> = ({ label }) => (
  <span className="text-md text-blue-500">
    <span className="p-1 text-blue-100">{label}</span>
  </span>
);
