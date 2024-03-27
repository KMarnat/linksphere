import supabase from "./supabase";
import { Post } from "../types/types";

export const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
};
