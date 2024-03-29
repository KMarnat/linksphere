export interface Post {
  user_id: number;
  likes_count: number;
  id: number;
  title: string;
  content: string;
  created_at: string;
  comments_count: number;
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
  created_at: string;
  email: string;
  name: string;
  password: string;
  avatar: string;
}

export interface SinglePostProps {
  content: string;
  post_id: number;
  user_id: number;
  created_at: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
