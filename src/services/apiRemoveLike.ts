import { Like } from "../types/types";
import supabase from "./supabase";

export const removeLike = async (postId: number, userId: string): Promise<Like[]> => {
  const { data, error } = await supabase
    .from("likes")
    .delete()
    .eq("post_id", postId)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Post could not be unliked.");
  }

  return data!;
};
