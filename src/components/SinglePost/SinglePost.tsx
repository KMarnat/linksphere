import { useQuery } from "@tanstack/react-query";
import Comments from "../Comments/Comments";
import Likes from "../Likes/Likes";
import { getUsers } from "../../services/apiUsers";

interface SinglePostProps {
  content: string;
  post_id: number;
  user_id: number;
}

const SinglePost: React.FC<SinglePostProps> = ({ content, post_id, user_id }) => {
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

  console.log(users);

  return (
    <article className="single-post">
      {isLoading ? <span>LOADING</span> : <h2>{userName}</h2>}
      <p>{content}</p>
      <div className="single-post__stats">
        <Likes post_id={post_id} />
        <Comments post_id={post_id} />
      </div>
    </article>
  );
};

export default SinglePost;
