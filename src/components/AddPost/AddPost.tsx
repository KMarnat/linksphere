import Avatar from "../Avatar/Avatar";
import Unknown from "../../assets/unknown.jpg";
import Button from "../Button/Button";

import SendIcon from "../SendIcon/SendIcon";

const AddPost = () => {
  return (
    <div className="add-post">
      <Avatar image={Unknown} />
      <textarea />
      <Button label={<SendIcon color="#6D00EB" />} type={"stats"} />
    </div>
  );
};

export default AddPost;
