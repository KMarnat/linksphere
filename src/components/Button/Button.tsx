interface ButtonProps {
  label: string;
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
