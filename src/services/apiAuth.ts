import { LoginCredentials } from "../types/types";
import supabase from "./supabase";
import { SignupCredentials } from "./../types/types";
import { supabaseUrl } from "./supabase";

export const signup = async ({ fullName, email, password }: SignupCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        coverImage: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
};

export const login = async ({ email, password }: LoginCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

// export const updateCurrentUser = async ({ password, fullName, avatar }) => {
//   // 1. Update password OR fullName
//   let updateData;
//   if (password) updateData = { password };
//   if (fullName) updateData = { data: { fullName } };

//   const { data, error } = await supabase.auth.updateUser(updateData);

//   if (error) throw new Error(error.message);
//   if (!avatar) return data;

//   // 2. Upload the avatar image
//   const fileName = `avatar=${data.user.id}-${Math.random()}`;

//   const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avatar);
//   if (storageError) throw new Error(storageError.message);

//   // 3. Update avatar in the user
//   const { data: updatedUser, error: error2 } = supabase.auth.updateUser({
//     data: {
//       avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
//     },
//   });

//   if (error2) throw new Error(error2.message);

//   return updatedUser;
// };

type AvatarUpdate = {
  avatar: File;
};

export const updateCurrentUserAvatar = async ({ avatar }: AvatarUpdate) => {
  // 1. Get the current user session
  const { data: session, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session?.session?.user) throw new Error("Unable to fetch user session.");

  const user = session.session.user;

  // 2. Upload the avatar image
  const fileName = `avatar=${user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;

  const { data: updatedUser, error: updateError } = await supabase.auth.updateUser({
    data: {
      avatar: avatarUrl,
    },
  });

  if (updateError) throw new Error(updateError.message);

  const { error: profileError } = await supabase
    .from("profile")
    .update({ avatar: avatarUrl })
    .eq("id", user.id);

  if (profileError) throw new Error(profileError.message);

  return updatedUser;
};

type CoverUpdate = {
  cover: File;
};

export const updateCurrentUserCover = async ({ cover }: CoverUpdate) => {
  // 1. Get the current user session
  const { data: session, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session?.session?.user) throw new Error("Unable to fetch user session.");

  const user = session.session.user;
  // 2. Upload the cover image
  const fileName = `cover=${user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage.from("covers").upload(fileName, cover);
  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const coverUrl = `${supabaseUrl}/storage/v1/object/public/covers/${fileName}`;

  const { data: updatedUser, error: updateError } = await supabase.auth.updateUser({
    data: {
      coverImage: coverUrl,
    },
  });

  if (updateError) throw new Error(updateError.message);

  const { error: profileError } = await supabase
    .from("profile")
    .update({ cover_image: coverUrl })
    .eq("id", user.id);

  if (profileError) throw new Error(profileError.message);

  return updatedUser;
};
