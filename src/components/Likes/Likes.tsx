import { useQuery } from "@tanstack/react-query";
import { getLikes } from "./../../services/apiLikes";

interface LikesProps {
  post_id: number;
}

const Likes: React.FC<LikesProps> = ({ post_id }) => {
  const {
    isLoading,
    data: likes,
    error,
  } = useQuery({
    queryKey: ["likes"],
    queryFn: getLikes,
  });

  const likesCount = likes?.filter((like) => like.post_id === post_id).length;

  if (error) console.error(error);

  return <>{isLoading ? <span>LOADING</span> : <span>Likes: {likesCount}</span>}</>;
};

export default Likes;
