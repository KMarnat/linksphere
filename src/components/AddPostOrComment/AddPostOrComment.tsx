import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import SendIcon from "../../assets/send.svg?react";
import { useUser } from "../../services/useUser";
import { useState } from "react";
import { useAddPost } from "../../services/useAddPost";
import { useAddComment } from "../../services/useAddComment";

interface AddPostProps {
  postType: string;
  post_id?: number;
}

const AddPostOrComment: React.FC<AddPostProps> = ({ postType, post_id }) => {
  const [postContent, setPostContent] = useState<string>("");
  const { user } = useUser();
  const { addNewPost, isPending: isPostPending } = useAddPost();
  const { addNewComment, isPending: isCommentPending } = useAddComment();
  const userAvatar = user?.user_metadata.avatar;

  const handlePostSubmit = () => {
    if (postType === "post" && postContent.trim() && user?.id) {
      addNewPost({ content: postContent, userId: user.id });
      setPostContent(""); // Clear the input field after submission
    }
    if (postType === "comment" && postContent.trim() && user?.id && post_id !== undefined) {
      addNewComment({ comment: postContent, userId: user.id, post_id });
      setPostContent(""); // Clear the input field after submission
    }
  };

  // 1. Label difference between add post and add comment
  // 2. different function for posting a comment

  return (
    <div className="add-post">
      <Avatar avatar={userAvatar} />
      <div className="add-post__content">
        <textarea
          name="post__content"
          className="add-post__textarea"
          required
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <label htmlFor="post__content" className="add-post__label">
          {postType === "post" && "What are you thinking about?"}
          {postType === "comment" && "Write a comment..."}
        </label>
      </div>
      <Button
        type={"stats"}
        onClick={handlePostSubmit}
        isLoading={postType === "post" ? isPostPending : isCommentPending}
      >
        <SendIcon className="btn__icon" />
      </Button>
    </div>
  );
};

export default AddPostOrComment;
