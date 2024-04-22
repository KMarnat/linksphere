import { useQuery } from "@tanstack/react-query";
import { getLikes } from "../../services/apiLikes";
import Button from "../Button/Button";
import LikeIcon from "../../assets/like-icon.svg?react";

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
          <Button type={"stats"}>
            <LikeIcon className="btn__icon btn__icon--like" />
          </Button>
          <span>{likesCount}</span>
        </div>
      )}
    </>
  );
};

export default Likes;
