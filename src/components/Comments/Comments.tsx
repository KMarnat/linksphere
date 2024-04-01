import { useQuery } from "@tanstack/react-query";
import { getComments } from "./../../services/apiComments";
import Button from "../Button/Button";
import CommentIconComponent from "../CommentIconComponent/CommentIconComponent";

interface CommentsProps {
  post_id: number;
}

const Comments: React.FC<CommentsProps> = ({ post_id }) => {
  const {
    isLoading,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  const commentsCount = comments?.filter((comment) => comment.post_id === post_id).length;

  if (error) console.error(error);

  return (
    <>
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="comments">
          <Button label={<CommentIconComponent color="#2E2B33" />} type="stats"></Button>
          <span>{commentsCount}</span>
        </div>
      )}
    </>
  );
};

export default Comments;
