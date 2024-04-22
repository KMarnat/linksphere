import supabase from "./supabase";
import { User } from "../types/types";

export const getUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase.from("profile").select("*");

  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }

  return data;
};
