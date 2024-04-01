import { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  type: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type }) => {
  return (
    <button onClick={onClick} className={`btn btn-${type}`}>
      {label}
    </button>
  );
};

export default Button;
