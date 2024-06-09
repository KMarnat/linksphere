import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addLike } from "./apiLikes";

export const useAddLike = () => {
  const queryClient = useQueryClient();

  const { mutate: addNewLike, isPending } = useMutation({
    mutationFn: ({ postId, userId }: { postId: number; userId: string }) => addLike(postId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
      toast.success("Post liked!");
    },
    onError: (err: Error) => {
      console.error("Error adding like:", err);
      toast.error("Failed to add like.");
    },
  });

  return { addNewLike, isPending };
};
