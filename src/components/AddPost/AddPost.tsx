import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import SendIcon from "../../assets/send.svg?react";
import { useUser } from "../../services/useUser";
import { useState } from "react";
import { useAddPost } from "../../services/useAddPost";

const AddPost = () => {
  const [postContent, setPostContent] = useState<string>("");
  const { user } = useUser();
  const { addNewPost, isPending } = useAddPost();
  const userAvatar = user?.user_metadata.avatar;

  const handlePostSubmit = () => {
    if (postContent.trim() && user?.id) {
      addNewPost({ content: postContent, userId: user.id });
      setPostContent(""); // Clear the input field after submission
    }
  };

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
          What are you thinking about?
        </label>
      </div>
      <Button type={"stats"} onClick={handlePostSubmit} isLoading={isPending}>
        <SendIcon className="btn__icon" />
      </Button>
    </div>
  );
};

export default AddPost;
