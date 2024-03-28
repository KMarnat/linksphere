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
