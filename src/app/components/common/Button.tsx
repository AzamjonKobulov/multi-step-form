import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full py-3 mt-10 bg-pink-500 text-white font-semibold text-xl tracking-wider rounded-md hover:bg-gray-900 transition-all duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
