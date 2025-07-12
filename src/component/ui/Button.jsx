import React from "react";
import clsx from "clsx"; // Optional: for conditional classNames

export const Button = ({
  children,
  className = "",
  variant = "solid",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-semibold transition-colors focus:outline-none";
  const variants = {
    solid: "bg-teal-500 text-white hover:bg-teal-600",
    outline: "border border-teal-500 text-teal-400 hover:bg-teal-700 bg-transparent",
  };

  return (
    <button
      className={clsx( variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;