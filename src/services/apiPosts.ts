import supabase from "./supabase";
import { Post } from "../types/types";

export const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data || [];
};

export const addPost = async (content: string, userId: string): Promise<void> => {
  const { data, error } = await supabase.from("posts").insert([{ content, user_id: userId }]);

  if (error) {
    console.error(error);
    throw new Error("Post could not be added");
  }

  return data!;
};

export const getUserPosts = async (userId: string) => {
  const { data, error } = await supabase.from("posts").select("*").eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Could not fetch user posts");
  }

  return data;
};
