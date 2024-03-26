import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    console.log({ email: email, password: password });
  };

  return (
    <section className="login">
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
        <Button type="primary" onClick={handleSubmit} label="Log in" />
      </form>
    </section>
  );
};

export default LoginForm;
