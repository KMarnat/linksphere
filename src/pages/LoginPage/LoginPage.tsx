import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import { useLogin } from "../../services/useLogin";
import Button from "./../../components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("kasparmarnat@gmail.com");
  const [password, setPassword] = useState("verysafepassword123");
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
        <Button onClick={() => navigate(-1)} type="back">
          &lt; back
        </Button>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__email">
            <input
              autoComplete="off"
              required={true}
              className="input"
              type="text"
              id="email"
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="user-label" htmlFor="email">
              Email address
            </label>
          </div>
          <div className="form__password">
            <input
              autoComplete="off"
              required={true}
              className="input"
              type="password"
              id="password"
              value={password}
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="user-label" htmlFor="email">
              Password
            </label>
          </div>
          <Button isLoading={isLoading} type="primary">
            Log in
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
