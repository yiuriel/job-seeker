export interface SelectProps {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = ({ name, label, options }: SelectProps) => {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={name} className="my-1 block text-base text-white">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="py-2 px-4 w-full text-slate-100 rounded-md placeholder:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
