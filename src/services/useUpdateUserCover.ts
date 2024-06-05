import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUserCover } from "./apiAuth";

export function useUpdateUserCover() {
  const queryClient = useQueryClient();

  const { mutate: updateUserCover, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserCover,
    onSuccess: () => {
      toast.success("Your cover image has been changed.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserCover, isUpdating };
}
