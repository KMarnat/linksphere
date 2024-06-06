import supabase from "./supabase";

export const addPost = async (content: string, userId: string): Promise<void> => {
  const { data, error } = await supabase.from("posts").insert([{ content, user_id: userId }]);

  if (error) {
    console.error(error);
    throw new Error("Post could not be added");
  }

  return data;
};
