import { useParams } from "react-router";
import { useLazyFetchJobByIdQuery } from "../../features/jobs/jobs.api";
import { useEffect } from "react";

export const JobDetailView = () => {
  const { id } = useParams<{ id: string }>();

  const [fetch, { data }] = useLazyFetchJobByIdQuery();

  useEffect(() => {
    if (id) fetch(id);
  }, [fetch, id]);

  return (
    <div className="bg-gray-800 rounded-md p-4">
      {data && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="text-gray-400">
              Posted at {new Date(data.createdAt).toLocaleString()}
            </p>
          </div>
          <p className="text-gray-400">{data.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-gray-300 rounded-md mr-2 py-1">
              Category: <b>{data.category}</b>
            </span>
            <span className="text-gray-300 rounded-md py-1">
              Location: <b>{data.location}</b>
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-700 text-white rounded-md px-3 py-1">
              Type: {data.type}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-blue-500 text-white rounded-md px-3 py-1">
              Salary: ${data.salaryMin} - ${data.salaryMax}
            </span>
            <span className="bg-gray-700 text-gray-400 rounded-md px-3 py-1">
              Company: {data.company}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
