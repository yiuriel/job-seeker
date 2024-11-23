import { FC } from "react";

export const JobDescription: FC<{ description: string }> = ({
  description,
}) => <p className="text-blue-300">{description}</p>;
