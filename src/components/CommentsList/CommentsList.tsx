import { useQuery } from "@tanstack/react-query";
import SingleComment from "../SingleComment/SingleComment";
import { getComments } from "../../services/apiComments";

interface CommentListProps {
  post_id: number;
}

const CommentsList: React.FC<CommentListProps> = ({ post_id }) => {
  const {
    isLoading,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  if (error) console.error(error);

  return (
    <ul className="comments-list">
      {isLoading ? (
        <span>Loading comments...</span>
      ) : (
        comments
          ?.filter((comment) => comment.post_id === post_id)
          .map((comment) => <SingleComment key={comment.id} comment={comment} />)
      )}
    </ul>
  );
};

export default CommentsList;
