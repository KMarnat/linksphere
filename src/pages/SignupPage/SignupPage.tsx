import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSignup } from "../../services/useSignup";
import { SignupCredentials } from "../../types/types";
import Button from "./../../components/Button/Button";

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = ({ fullName, email, password }: SignupCredentials) => {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  };

  return (
    <section className="signup">
      <div className="signup__panel">
        <Button onClick={() => navigate(-1)} type="back">
          &lt; back
        </Button>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__name">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              disabled={isLoading}
              {...register("fullName", { required: "This field is required." })}
            />

            <ErrorMessage label={errors?.fullName?.message} />
          </div>
          <div className="form__email">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              disabled={isLoading}
              {...register("email", {
                required: "This field is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address.",
                },
              })}
            />
            <ErrorMessage label={errors?.email?.message} />
          </div>

          <div className="form__password">
            <label htmlFor="password">Password (min 8 characters)</label>
            <input
              type="password"
              id="password"
              disabled={isLoading}
              {...register("password", {
                required: "This field is required.",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters.",
                },
              })}
            />
            <ErrorMessage label={errors?.password?.message} />
          </div>
          <div className="form__password">
            <label htmlFor="passwordConfirm">Repeat password</label>
            <input
              type="password"
              id="passwordConfirm"
              disabled={isLoading}
              {...register("passwordConfirm", {
                required: "This field is required.",
                validate: (value) => value === getValues().password || "Passwords need to match.",
              })}
            />
            <ErrorMessage label={errors?.passwordConfirm?.message} />
          </div>
          <div className="form__buttons">
            <Button type="secondary" onClick={() => reset()}>
              Cancel
            </Button>
            <Button isLoading={isLoading} type="primary">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
