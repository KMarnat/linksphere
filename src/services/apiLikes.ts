import supabase from "./supabase";
import { Like } from "../types/types";

export const getLikes = async (): Promise<Like[]> => {
  const { data, error } = await supabase.from("likes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Likes could not be loaded");
  }

  return data;
};

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

export const checkUserLiked = async (postId: number, userId: string) => {
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") {
    // 'PGRST116' is code for 'no rows found'
    console.error(error);
    throw new Error("Error checking like status");
  }

  return { liked: !!data };
};
