import supabase from "./supabase";

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
