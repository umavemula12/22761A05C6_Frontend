import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
