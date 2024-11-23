import { FC, MouseEventHandler } from "react";

export const Button: FC<{
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}> = ({
  size = "medium",
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  let padding = "px-4 py-2";
  switch (size) {
    case "small":
      padding = "px-2 py-1";
      break;
    case "large":
      padding = "px-6 py-3";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${className} bg-blue-500 hover:bg-blue-600 text-white font-bold ${padding} w-full rounded border-0`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
