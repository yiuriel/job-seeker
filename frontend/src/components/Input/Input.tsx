import { useRef } from "react";
import { InputLabel } from "./InputLabel";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const Input = ({ className, label, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={className} onClick={() => inputRef.current?.focus()}>
      {label && <InputLabel label={label} />}
      <input
        ref={inputRef}
        className="py-2 px-4 w-full text-slate-100 rounded-md placeholder:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </div>
  );
};
