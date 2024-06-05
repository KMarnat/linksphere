export interface Post {
  user_id: number;
  id: number;
  content: string;
  created_at: string;
}

export interface Like {
  id: number;
  created_at: string;
  post_id: number;
  user_id: number;
}

export interface Comment {
  id: number;
  user_id: number;
  post_id: number;
  comment: string;
  created_at: string;
}

export interface User {
  id: number;
  display_name: string;
  avatar: string;
  cover_image: string;
  created_at: string;
  email: string;
}

export interface SinglePostProps {
  post: string;
  post_id: number;
  user_id: number;
  created_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  fullName: string;
  email: string;
  password: string;
}

export interface AvatarUpdate {
  avatar: File;
}

export interface CoverUpdate {
  cover: File;
}
