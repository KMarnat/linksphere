import { useEffect } from "react";
import posts from "../../utils/tempPosts";
import SinglePost from "../SinglePost/SinglePost";
import { getPosts } from "../../services/apiPosts";

const Feed = () => {
  useEffect(() => {
    getPosts().then((data: any) => console.log(data));
  });

  return (
    <section className="feed">
      {posts.map((post, i) => (
        <SinglePost
          name={post.fullName}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          key={i}
        />
      ))}
    </section>
  );
};

export default Feed;
