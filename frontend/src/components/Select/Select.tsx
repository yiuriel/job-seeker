export interface SelectProps {
  name: string;
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
  selected?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  name,
  label,
  options,
  selected,
  onChange,
}: SelectProps) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={name} className="my-1 block text-base text-white">
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className="h-10 py-2 px-4 w-full text-slate-100 rounded-md placeholder:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={selected}
        onChange={(e) => onChange?.(e.target.value)}
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
