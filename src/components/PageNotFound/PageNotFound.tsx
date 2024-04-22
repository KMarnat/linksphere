import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="pnf">
      <h1>Page not found</h1>
      <Button onClick={() => navigate(-1)} type="back">
        &lt; back
      </Button>
    </section>
  );
};

export default PageNotFound;
