import { useQuery } from "@tanstack/react-query";
import Comments from "../Comments/Comments";
import Likes from "../Likes/Likes";
import { getUsers } from "../../services/apiUsers";
import Avatar from "../Avatar/Avatar";
import unknownUser from "../../assets/unknown.jpg";
import { SinglePostProps } from "../../types/types";
import { formatDate } from "../../helpers/formatDate";

const SinglePost: React.FC<SinglePostProps> = ({ content, post_id, user_id, created_at }) => {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (error) console.error(error);

  const user = users?.find((user) => user.id === user_id);
  const userName = user ? user.name : "Unknown User";
  const userAvatar = user ? user.avatar : unknownUser;

  console.log(created_at);

  return (
    <article className="single-post">
      <div className="single-post__author">
        <Avatar image={userAvatar} />
        <div>
          {isLoading ? <span>LOADING</span> : <h4>{userName}</h4>}
          <span>{formatDate(created_at)}</span>
        </div>
      </div>
      <p className="single-post__content">{content}</p>
      <div className="single-post__stats">
        <Likes post_id={post_id} />
        <Comments post_id={post_id} />
      </div>
    </article>
  );
};

export default SinglePost;
