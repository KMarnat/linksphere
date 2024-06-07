import { useQuery } from "@tanstack/react-query";
import { checkUserLiked } from "./apiCheckUserLiked"; // Import your checkUserLiked API function

export const useCheckLike = (postId: number, userId: string) => {
  return useQuery({
    queryKey: ["checkLike", postId, userId],
    queryFn: () => checkUserLiked(postId, userId),
    enabled: !!userId, // Only run query if userId is available
  });
};
