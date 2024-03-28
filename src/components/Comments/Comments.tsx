import { useQuery } from "@tanstack/react-query";
import { getComments } from "./../../services/apiComments";

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

  return <>{isLoading ? <span>LOADING</span> : <span>Comments: {commentsCount}</span>}</>;
};

export default Comments;
