import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUserAvatar } from "./apiAuth";

export function useUpdateUserAvatar() {
  const queryClient = useQueryClient();

  const { mutate: updateUserAvatar, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserAvatar,
    onSuccess: () => {
      toast.success("Your avatar has been changed.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserAvatar, isUpdating };
}
