import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "border border-blue-600 text-blue-600 hover:bg-white hover:text-black",
    outline: "border border-gray-500 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
