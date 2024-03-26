import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome">
      <h1>Welcome to LinkSphere</h1>
      <div className="welcome__panel">
        <p className="lead">Please log in or create an account</p>
        <div className="welcome__buttons">
          <Button onClick={() => navigate("/login")} label={"Log in"} type="primary" />
          <Button onClick={() => navigate("/signup")} label={"Sign up"} type="primary" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
