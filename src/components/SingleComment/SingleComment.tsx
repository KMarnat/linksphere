import Avatar from "../Avatar/Avatar";
import unknownUser from "../../assets/unknown.jpg";
import { Comment } from "../../types/types";
import { formatDate } from "./../../helpers/formatDate";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";

interface SingleCommentProps {
  comment: Comment;
}

const SingleComment: React.FC<SingleCommentProps> = ({ comment }) => {
  console.log(comment);

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

  const getUserName = (userId: number): string => {
    const user = users?.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  return (
    <li className="single-comment">
      <div className="single-comment__connector"></div>
      <Avatar image={unknownUser} />
      <div className="single-comment__info">
        <div className="single-comment__author">
          {isLoading ? (
            <span>LOADING...</span>
          ) : (
            <p className="lead">{getUserName(comment?.user_id)}</p>
          )}

          <span>{formatDate(comment?.created_at)}</span>
        </div>
        <p className="single-comment__content">{comment?.comment}</p>
      </div>
    </li>
  );
};

export default SingleComment;
