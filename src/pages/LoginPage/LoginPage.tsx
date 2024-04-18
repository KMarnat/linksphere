import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { useLogin } from "../../services/useLogin";
import Button from "./../../components/Button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("kaspar2@example.com");
  const [password, setPassword] = useState("verihardpassword9000");
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <section className="login">
      <div className="login__panel">
        <Button onClick={() => navigate(-1)} label="&lt; back" type="back" />
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__email">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="form__password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button
            isLoading={isLoading}
            type="primary"
            label={!isLoading ? "Log in" : "Loading..."}
          />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
