export type Job = {
  id: string;
  title: string;
  description: string;
  salaryMin: number;
  salaryMax: number;
  location: string;
  company: string;
  category: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  createdAt: string;
  updatedAt: string;
  tags: string[];
};
