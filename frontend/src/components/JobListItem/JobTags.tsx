import { FC } from "react";

export const JobTags: FC<{ tags: string[] }> = ({ tags }) => (
  <div className="mt-4 flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <span key={index} className="text-xs font-medium text-white">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full px-3 py-1 shadow-lg">
          {tag}
        </span>
      </span>
    ))}
  </div>
);
