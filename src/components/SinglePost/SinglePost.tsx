import { useQuery } from "@tanstack/react-query";
import Comments from "../CommentsAmount/CommentsAmount";
import Likes from "../LikesAmount/LikesAmount";
import { getUserById } from "../../services/apiUserById";
import Avatar from "../Avatar/Avatar";
import { SinglePostProps } from "../../types/types";
import { formatDate } from "../../helpers/formatDate";
import CommentsList from "../CommentsList/CommentsList";
import { useState } from "react";
import Menu from "../Menu/Menu";
import { useUser } from "../../services/useUser";
import AddPostOrComment from "../AddPostOrComment/AddPostOrComment";

const SinglePost: React.FC<SinglePostProps> = ({ post, post_id, user_id, created_at }) => {
  const [activeComments, setActiveComments] = useState(false);
  const { user } = useUser();

  const {
    isLoading,
    data: author,
    error,
  } = useQuery({
    queryKey: ["profile", user_id],
    queryFn: () => getUserById(user_id),
  });

  if (error) console.error(error);

  // Passing this to Menu as props
  const postAuthor = author?.id === user?.id;

  return (
    <article className="single-post">
      <div className="single-post__content">
        <div className="single-post__author">
          {author?.avatar && <Avatar avatar={author.avatar} />}
          <div className="single-post__author-info">
            {isLoading ? <span>LOADING</span> : <h4>{author?.display_name}</h4>}
            <span>{formatDate(created_at)}</span>
          </div>
          <Menu postAuthor={postAuthor} />
        </div>
        <p className="single-post__post">{post}</p>
        <div className="single-post__stats">
          <Likes post_id={post_id} />
          <Comments
            post_id={post_id}
            activeComments={activeComments}
            setActiveComments={setActiveComments}
          />
        </div>
      </div>
      {activeComments && (
        <>
          <AddPostOrComment postType="comment" post_id={post_id} />
          <CommentsList post_id={post_id} />
        </>
      )}
    </article>
  );
};

export default SinglePost;
