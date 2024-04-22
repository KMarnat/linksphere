import { ReactNode } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface ButtonProps {
  children: ReactNode;
  type: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const override = {
  margin: "0 auto",
  borderColor: "#2E2B33",
  height: "1.5rem",
  width: "1.5rem",
};

const Button: React.FC<ButtonProps> = ({ onClick, children, type, isLoading }) => {
  return (
    <button disabled={isLoading} onClick={onClick} className={`btn btn-${type}`}>
      {isLoading ? <ClipLoader cssOverride={override} /> : children}
    </button>
  );
};

export default Button;
