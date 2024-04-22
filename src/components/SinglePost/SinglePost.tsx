import { useQuery } from "@tanstack/react-query";
import Comments from "../CommentsAmount/CommentsAmount";
import Likes from "../LikesAmount/LikesAmount";
import { getUsers } from "../../services/apiUsers";
import Avatar from "../Avatar/Avatar";
import unknownUser from "../../assets/unknown.jpg";
import { SinglePostProps } from "../../types/types";
import { formatDate } from "../../helpers/formatDate";

import CommentsList from "../CommentsList/CommentsList";
import { useState } from "react";

const SinglePost: React.FC<SinglePostProps> = ({ post, post_id, user_id, created_at }) => {
  const [activeComments, setActiveComments] = useState(false);

  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getUsers,
  });

  console.log(users);

  if (error) console.error(error);

  const user = users?.find((user) => user.id === user_id);
  const userName = user ? user.name : "Unknown User";
  const userAvatar = user ? user.avatar : unknownUser;

  return (
    <article className="single-post">
      <div className="single-post__content">
        <div className="single-post__author">
          <Avatar image={userAvatar} />
          <div>
            {isLoading ? <span>LOADING</span> : <h4>{userName}</h4>}
            <span>{formatDate(created_at)}</span>
          </div>
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
      {activeComments && <CommentsList post_id={post_id} />}
    </article>
  );
};

export default SinglePost;
