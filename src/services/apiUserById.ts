import supabase from "./supabase";
import { User } from "../types/types";

export const getUserById = async (userId: number): Promise<User | null> => {
  const { data, error } = await supabase.from("profile").select("*").eq("id", userId).single();

  if (error) {
    console.error(error);
    throw new Error("User data could not be loaded");
  }

  return data;
};
