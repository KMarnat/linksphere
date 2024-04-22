import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./apiAuth";

export const useUser = () => {
  const {
    isLoading,
    data: user,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, isAuthenticated: user?.role === "authenticated", fetchStatus, user };
};
