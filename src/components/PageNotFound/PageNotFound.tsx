import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="pnf">
      <h1>Page not found</h1>
      <Button onClick={() => navigate(-1)} label="&lt; back" type="back" />
    </section>
  );
};

export default PageNotFound;
