import { useNavigate } from "react-router";
import { usePostJobMutation } from "../../features/jobs/jobs.api";
import { Job } from "../../features/jobs/jobs.types";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { InputLabel } from "../Input/InputLabel";
import { Select } from "../Select/Select";

export const JobPostForm = () => {
  const navigate = useNavigate();
  const [postJob] = usePostJobMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newJob: Omit<Job, "id"> = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      salaryMin: Number(formData.get("salaryMin")),
      salaryMax: Number(formData.get("salaryMax")),
      location: formData.get("location") as string,
      company: formData.get("company") as string,
      category: formData.get("category") as Job["category"],
      type: formData.get("type") as Job["type"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: (formData.getAll("tags") as string[]).filter(Boolean),
    };
    postJob(newJob);
    navigate("/");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input name="title" label="Job Title" placeholder="Enter job title" />
      <Input
        name="description"
        label="Description"
        placeholder="Enter job description"
        type="textarea"
      />
      <div className="w-full space-y-2">
        <InputLabel label="Salary range" />
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <Input name="salaryMin" placeholder="Min" type="number" />
          </div>
          <div className="w-full">
            <Input name="salaryMax" placeholder="Max" type="number" />
          </div>
        </div>
      </div>
      <Input name="location" label="Location" placeholder="Enter location" />
      <Input name="company" label="Company" placeholder="Enter company name" />
      <Select
        name="category"
        label="Category"
        options={[
          { value: "full-time", label: "Full-time" },
          { value: "part-time", label: "Part-time" },
          { value: "contract", label: "Contract" },
          { value: "internship", label: "Internship" },
        ]}
      />
      <Select
        name="type"
        label="Type"
        options={[
          { value: "full-time", label: "Full-time" },
          { value: "part-time", label: "Part-time" },
          { value: "contract", label: "Contract" },
          { value: "internship", label: "Internship" },
        ]}
      />
      <div className="w-full">
        <InputLabel label="Tags" />
        <Input name="tags" placeholder="Enter tags (comma separated)" />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit">Send for review</Button>
      </div>
    </form>
  );
};
