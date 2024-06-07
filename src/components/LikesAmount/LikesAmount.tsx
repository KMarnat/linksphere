import { useQuery } from "@tanstack/react-query";
import { getLikes } from "../../services/apiLikes";
import Button from "../Button/Button";
import LikeIcon from "../../assets/like-icon.svg?react";
import { useAddLike } from "../../services/useAddLike";
import { useUser } from "../../services/useUser";
import { useRemoveLike } from "../../services/useRemoveLike";

interface LikesProps {
  post_id: number;
}

const Likes: React.FC<LikesProps> = ({ post_id }) => {
  const { user } = useUser();
  const { addNewLike, isPending: isLikePending } = useAddLike();
  const { removeNewLike, isPending: isUnlikePending } = useRemoveLike();

  const {
    isLoading,
    data: likes,
    error,
  } = useQuery({
    queryKey: ["likes"],
    queryFn: getLikes,
  });

  if (error) console.error(error);

  const likesCount = likes?.filter((like) => like.post_id === post_id).length;
  const hasLiked = likes?.some((like) => like.post_id === post_id && like.user_id === user?.id);

  const handleLikes = () => {
    if (!user) return;
    const userId = user.id;

    if (hasLiked) {
      console.log(`Removing like for post ${post_id} by user ${userId}`);
      removeNewLike({ postId: post_id, userId });
    } else {
      console.log(`Adding like for post ${post_id} by user ${userId}`);
      addNewLike({ postId: post_id, userId });
    }
  };

  return (
    <>
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="likes">
          <Button type={"stats"} onClick={handleLikes}>
            <LikeIcon className={`btn__icon btn__icon--like ${hasLiked && "btn__icon--active"}`} />
          </Button>
          <span>{likesCount}</span>
        </div>
      )}
    </>
  );
};

export default Likes;
