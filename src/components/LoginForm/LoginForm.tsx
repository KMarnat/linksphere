import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState, FormEvent } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    console.log({ email: email, password: password });
  };

  return (
    <section className="login">
      <div className="login__panel">
        <Button onClick={() => navigate(-1)} label="&lt; back" type="back" />
        <form className="form">
          <div className="form__email">
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form__password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="primary" onClick={() => handleSubmit} label="Log in" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
