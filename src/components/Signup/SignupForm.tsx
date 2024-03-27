import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SignupForm = () => {
  const navigate = useNavigate();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="signup">
      <Button onClick={() => navigate(-1)} label="&lt; back" type="back" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__name">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "This field is required." })}
          />

          <ErrorMessage label={errors?.fullName?.message} />
        </div>
        <div className="form__email">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
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
            {...register("passwordConfirm", {
              required: "This field is required.",
              validate: (value) => value === getValues().password || "Passwords need to match.",
            })}
          />
          <ErrorMessage label={errors?.passwordConfirm?.message} />
        </div>
        <div className="form__buttons">
          <Button type="secondary" onClick={() => reset} label="Cancel" />
          <Button type="primary" label="Sign up" />
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
