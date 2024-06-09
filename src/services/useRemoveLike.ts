import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { removeLike } from "./apiLikes";

export const useRemoveLike = () => {
  const queryClient = useQueryClient();

  const { mutate: removeNewLike, isPending } = useMutation({
    mutationFn: ({ postId, userId }: { postId: number; userId: string }) =>
      removeLike(postId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
      toast.success("Post unliked!");
    },
    onError: (err: Error) => {
      console.error("Error removing like:", err);
      toast.error("Failed to remove like.");
    },
  });

  return { removeNewLike, isPending };
};
