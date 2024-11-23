import { FC, useMemo } from "react";
import { Link } from "react-router";

export const JobTitle: FC<{ title: string; id: string }> = ({ title, id }) => {
  const link = useMemo(() => `/job/${id}`, [id]);

  return (
    <Link to={link}>
      <h2 className="text-xl font-semibold text-blue-200">{title}</h2>
    </Link>
  );
};
