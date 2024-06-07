import { Like } from "../types/types";
import supabase from "./supabase";

export const addLike = async (postId: number, userId: string): Promise<Like[]> => {
  const { data, error } = await supabase
    .from("likes")
    .insert([{ post_id: postId, user_id: userId }]);

  if (error) {
    console.error(error);
    throw new Error("Like could not be added");
  }

  return data!;
};
