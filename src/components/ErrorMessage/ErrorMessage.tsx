interface ErrorMessageProps {
  label:
    | string
    | undefined
    | {
        message?: string;
      };
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ label }) => {
  if (!label) return null; // Handle the case where label is undefined

  // If label is a FieldError object, extract the message
  const errorMessage = typeof label === "string" ? label : label.message;
  return <span className="form__error">{errorMessage}</span>;
};

export default ErrorMessage;
