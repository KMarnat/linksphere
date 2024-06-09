import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addComment } from "./apiAddComment";

export const useAddComment = () => {
  const queryClient = useQueryClient();

  const { mutate: addNewComment, isPending } = useMutation({
    mutationFn: ({
      comment,
      userId,
      post_id,
    }: {
      comment: string;
      userId: string;
      post_id: number;
    }) => addComment(comment, userId, post_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      toast.success("Comment added successfully!");
    },
    onError: (err: Error) => {
      console.error("Error adding comment:", err);
      toast.error("Failed to add comment.");
    },
  });

  return { addNewComment, isPending };
};
