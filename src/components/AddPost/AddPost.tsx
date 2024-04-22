import Avatar from "../Avatar/Avatar";
import Unknown from "../../assets/unknown.jpg";
import Button from "../Button/Button";
import SendIcon from "../../assets/send.svg?react";

const AddPost = () => {
  return (
    <div className="add-post">
      <Avatar image={Unknown} />
      <textarea />
      <Button type={"stats"}>
        <SendIcon className="btn__icon" />
      </Button>
    </div>
  );
};

export default AddPost;
