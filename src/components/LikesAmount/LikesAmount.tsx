import { useQuery } from "@tanstack/react-query";
import { getLikes } from "../../services/apiLikes";
import Button from "../Button/Button";
import LikeIconComponent from "../LikeIconComponent/LikeIconComponent";

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

  return (
    <>
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="likes">
          <Button label={<LikeIconComponent color="#2E2B33" />} type={"stats"}></Button>
          <span>{likesCount}</span>
        </div>
      )}
    </>
  );
};

export default Likes;
