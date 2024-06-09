import supabase from "./supabase";
import { User } from "../types/types";

export const getProfiles = async (): Promise<User[]> => {
  const { data, error } = await supabase.from("profile").select("*");

  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }

  return data;
};

export const getProfileById = async (userId: string): Promise<User | null> => {
  const { data, error } = await supabase.from("profile").select("*").eq("id", userId).single();

  if (error) {
    console.error(error);
    throw new Error("User data could not be loaded");
  }

  return data;
};
