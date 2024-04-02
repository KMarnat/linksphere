import SinglePost from "../SinglePost/SinglePost";
import { getPosts } from "../../services/apiPosts";
import { useQuery } from "@tanstack/react-query";

const Feed = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (error) console.error(error);

  if (isLoading) return <span>LOADING</span>;

  return (
    <section className="feed">
      {posts?.reverse().map((post) => (
        <>
          <SinglePost
            key={post.id}
            post={post.content}
            post_id={post.id}
            user_id={post.user_id}
            created_at={post.created_at}
          />
        </>
      ))}
    </section>
  );
};

export default Feed;
