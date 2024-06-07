import supabase from "./supabase";

export const getUserPosts = async (userId: string) => {
  const { data, error } = await supabase.from("posts").select("*").eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Could not fetch user posts");
  }

  return data;
};
