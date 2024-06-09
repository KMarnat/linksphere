import { getPosts } from "../../services/apiPosts";
import { useQuery } from "@tanstack/react-query";
import AddPostOrComment from "../../components/AddPostOrComment/AddPostOrComment";
import SinglePost from "../../components/SinglePost/SinglePost";

const FeedPage = () => {
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
      <AddPostOrComment postType="post" />
      {posts?.reverse().map((post) => (
        <SinglePost
          key={post.id}
          post={post.content}
          post_id={post.id}
          user_id={post.user_id}
          created_at={post.created_at}
        />
      ))}
    </section>
  );
};

export default FeedPage;
