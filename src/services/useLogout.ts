import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.success("Successfully logged out. See you soon!");
    },
  });

  return { logout, isLoading };
};
