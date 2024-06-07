import supabase from "./supabase";

export const checkUserLiked = async (postId: number, userId: string) => {
  const { data, error } = await supabase
    .from("likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") {
    // 'PGRST116' is code for 'no rows found'
    console.error(error);
    throw new Error("Error checking like status");
  }

  return { liked: !!data };
};
