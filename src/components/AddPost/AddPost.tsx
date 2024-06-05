import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import SendIcon from "../../assets/send.svg?react";
import { useUser } from "../../services/useUser";

const AddPost = () => {
  const { user } = useUser();
  const userAvatar = user?.user_metadata.avatar;

  return (
    <div className="add-post">
      <Avatar avatar={userAvatar} />
      <textarea />
      <Button type={"stats"}>
        <SendIcon className="btn__icon" />
      </Button>
    </div>
  );
};

export default AddPost;
