import { useNavigate } from "react-router-dom";
import Button from "./../../components/Button/Button";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome">
      <h1>Welcome to LinkSphere</h1>
      <div className="welcome__panel">
        <p className="lead">Please log in or create an account</p>
        <div className="welcome__buttons">
          <Button onClick={() => navigate("/login")} type="primary">
            Log in
          </Button>
          <Button onClick={() => navigate("/signup")} type="primary">
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
