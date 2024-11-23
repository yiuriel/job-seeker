import { FC } from "react";
import { DetailItem } from "./DetailItem";

export const JobDetails: FC<{ type: string; category: string }> = ({
  type,
  category,
}) => (
  <div className="flex flex-wrap gap-2">
    <DetailItem label={`Type: ${type}`} />
    <DetailItem label={`Category: ${category}`} />
  </div>
);
