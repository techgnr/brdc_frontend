import React from "react";
import { Link } from "react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  path?: string;
}

const LinkButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  path = "/",
}) => {
  const baseStyles =
    "inline-flex px-4 py-3 items-center cursor-pointer justify-center text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-green-200 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-300",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <Link to={path} className={combinedClasses}>
      {children}
    </Link>
  );
};

export default LinkButton;
