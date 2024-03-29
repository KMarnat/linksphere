import { ReactNode, useEffect } from "react";
import { useUser } from "../../services/useUser";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated, fetchStatus } = useUser();

  // 2. If there is NO auth user, redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading && fetchStatus !== "fetching") navigate("/welcome");
  }, [isAuthenticated, isLoading, navigate, fetchStatus]);

  // 3. While loading, show spinner
  if (isLoading) return <span>LOADING</span>;

  // 4. If there IS auth user, render the app

  if (isAuthenticated) return <>{children}</>;
};

export default ProtectedRoute;
