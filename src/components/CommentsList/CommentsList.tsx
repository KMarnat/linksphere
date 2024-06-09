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
    queryKey: ["comments", post_id],
    queryFn: () => getComments(post_id),
  });

  if (error) console.error(error);

  return (
    <ul className="comments-list">
      {isLoading ? (
        <span>Loading comments...</span>
      ) : (
        comments?.map((comment) => <SingleComment key={comment.id} comment={comment} />).reverse()
      )}
    </ul>
  );
};

export default CommentsList;
