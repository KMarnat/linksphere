import supabase from "./supabase";
import { Comment } from "../types/types";

export const getComments = async (): Promise<Comment[]> => {
  const { data, error } = await supabase.from("comments").select("*");

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data || [];
};
