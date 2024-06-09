import Avatar from "../Avatar/Avatar";
import { Comment } from "../../types/types";
import { formatDate } from "./../../helpers/formatDate";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/apiUserById";

interface SingleCommentProps {
  comment: Comment;
}

const SingleComment: React.FC<SingleCommentProps> = ({ comment }) => {
  const {
    isLoading,
    data: commentor,
    error,
  } = useQuery({
    queryKey: ["profile", comment.user_id],
    queryFn: () => getUserById(comment.user_id),
  });

  console.log(commentor);

  if (error) console.error(error);

  return (
    <li className="single-comment">
      <div className="single-comment__connector"></div>
      <Avatar avatar={commentor?.avatar || ""} />
      <div className="single-comment__info">
        <div className="single-comment__author">
          {isLoading ? <span>LOADING...</span> : <p className="lead">{commentor?.display_name}</p>}

          <span>{formatDate(comment?.created_at)}</span>
        </div>
        <p className="single-comment__content">{comment?.comment}</p>
      </div>
    </li>
  );
};

export default SingleComment;
