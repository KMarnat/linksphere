import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addPost } from "./apiAddPost"; // Ensure you have the correct path

export const useAddPost = () => {
  const queryClient = useQueryClient();

  const { mutate: addNewPost, isPending } = useMutation({
    mutationFn: ({ content, userId }: { content: string; userId: string }) =>
      addPost(content, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post added successfully!");
    },
    onError: (err: Error) => {
      console.error("Error adding post:", err);
      toast.error("Failed to add post.");
    },
  });

  return { addNewPost, isPending };
};
