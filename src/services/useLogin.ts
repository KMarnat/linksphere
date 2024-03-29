import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import { LoginCredentials } from "../types/types";
import toast from "react-hot-toast";

export const useLogin = () => {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: LoginCredentials) => loginApi({ email, password }),
    onSuccess: (user) => {
      // queryClient.setQueryData(["user"], user);
      console.log(user);
      toast.success("Successfully logged in!");
      navigate("/feed");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect.");
    },
  });

  return { login, isLoading };
};
