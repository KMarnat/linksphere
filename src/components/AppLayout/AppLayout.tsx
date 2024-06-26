import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
