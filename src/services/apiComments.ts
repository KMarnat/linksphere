import supabase from "./supabase";
import { Comment } from "../types/types";

export const getComments = async (postId: number): Promise<Comment[]> => {
  const { data, error } = await supabase.from("comments").select("*").eq("post_id", postId);

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
};

export const addComment = async (
  comment: string,
  userId: string,
  post_id: number
): Promise<void> => {
  const { data, error } = await supabase
    .from("comments")
    .insert([{ comment, user_id: userId, post_id }]);

  if (error) {
    console.error(error);
    throw new Error("Post could not be added");
  }

  return data!;
};
